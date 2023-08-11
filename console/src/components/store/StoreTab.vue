<script lang="ts" setup>
import { useQuery } from "@tanstack/vue-query";
import axios from "axios";
import {
  IconArrowLeft,
  IconArrowRight,
  IconGrid,
  IconList,
  IconRefreshLine,
  VButton,
  VEmpty,
  VLoading,
  VPagination,
  VSpace,
} from "@halo-dev/components";
import { ref } from "vue";
import AppCard from "./AppCard.vue";
import AppBlockCard from "./AppBlockCard.vue";
import { useI18n } from "vue-i18n";
import { useLocalStorage } from "@vueuse/core";
import AppDetailModal from "./AppDetailModal.vue";
import { nextTick } from "vue";

const { t } = useI18n();

const props = withDefaults(
  defineProps<{
    type: "PLUGIN" | "THEME";
  }>(),
  {}
);

const viewTypes = [
  {
    name: "list",
    tooltip: t("core.attachment.filters.view_type.items.grid"),
    icon: IconList,
  },
  {
    name: "grid",
    tooltip: t("core.attachment.filters.view_type.items.list"),
    icon: IconGrid,
  },
];

const viewType = useLocalStorage<string>("app-store-list-view", "list");

const keyword = ref("");
const page = ref(1);
const size = ref(20);
const selectedSort = ref("latestReleaseTimestamp,desc");
const selectedPriceMode = ref("");

const { data, isFetching, isLoading, refetch } = useQuery({
  queryKey: [
    "store-apps",
    keyword,
    selectedSort,
    page,
    size,
    selectedPriceMode,
    props.type,
  ],
  queryFn: async () => {
    const { data } = await axios.get(
      `https://halo.run/apis/api.store.halo.run/v1alpha1/applications`,
      {
        params: {
          keyword: keyword.value,
          sort: selectedSort.value,
          page: page.value,
          size: size.value,
          priceMode: selectedPriceMode.value,
          type: props.type,
        },
      }
    );
    return data;
  },
  onSuccess(data) {
    page.value = data.page;
    size.value = data.size;
  },
});

// detail modal
const detailModal = ref(false);
const selectedApp = ref();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleOpenDetailModal(app: any) {
  selectedApp.value = app.application.metadata.name;
  detailModal.value = true;
}

const handleSelectPrevious = async () => {
  if (!data.value) return;

  const items = data.value.items;

  const index = items.findIndex(
    (app) => app.application.metadata.name === selectedApp.value
  );

  if (index === undefined) return;

  if (index > 0) {
    selectedApp.value = items[index - 1].application.metadata.name;
    return;
  }

  if (index === 0 && data.value.hasPrevious) {
    page.value--;
    await nextTick();
    await refetch();
    selectedApp.value = items[data.value.length - 1].application.metadata.name;
  }
};

const handleSelectNext = async () => {
  if (!data.value) return;

  const items = data.value.items;

  const index = items.findIndex(
    (app) => app.application.metadata.name === selectedApp.value
  );

  if (index === undefined) return;

  if (index < items.length - 1) {
    selectedApp.value = items[index + 1].application.metadata.name;
    return;
  }

  if (index === items.length - 1 && data.value?.hasNext) {
    page.value++;
    await nextTick();
    await refetch();
    selectedApp.value = items[0].application.metadata.name;
  }
};
</script>

<template>
  <div class="block w-full rounded bg-gray-50 px-3 py-2">
    <div class="relative flex flex-col items-start sm:flex-row sm:items-center">
      <div class="flex w-full flex-1 items-center sm:w-auto">
        <SearchInput v-model="keyword" />
      </div>
      <div class="mt-4 flex sm:mt-0">
        <VSpace spacing="lg">
          <FilterDropdown
            v-model="selectedPriceMode"
            label="价格"
            :items="[
              {
                value: '',
                label: '全部',
              },
              {
                value: 'FREE',
                label: '免费',
              },
              {
                value: 'ONE_TIME',
                label: '付费',
              },
            ]"
          />
          <FilterDropdown
            v-model="selectedSort"
            :label="$t('core.common.filters.labels.sort')"
            :items="[
              {
                label: '最近更新',
                value: 'latestReleaseTimestamp,desc',
              },
              {
                label: '最新创建',
                value: 'creationTimestamp,desc',
              },
            ]"
          />
          <div class="flex flex-row gap-2">
            <div
              v-for="(item, index) in viewTypes"
              :key="index"
              v-tooltip="`${item.tooltip}`"
              :class="{
                'bg-gray-200 font-bold text-black': viewType === item.name,
              }"
              class="cursor-pointer rounded p-1 hover:bg-gray-200"
              @click="viewType = item.name"
            >
              <component :is="item.icon" class="h-4 w-4" />
            </div>
          </div>
          <div class="flex flex-row gap-2">
            <div
              class="group cursor-pointer rounded p-1 hover:bg-gray-200"
              @click="refetch()"
            >
              <IconRefreshLine
                v-tooltip="$t('core.common.buttons.refresh')"
                :class="{ 'animate-spin text-gray-900': isFetching }"
                class="h-4 w-4 text-gray-600 group-hover:text-gray-900"
              />
            </div>
          </div>
        </VSpace>
      </div>
    </div>
  </div>
  <VLoading v-if="isLoading" />
  <Transition v-else-if="!data?.items.length" appear name="fade">
    <VEmpty message="没有找到符合条件的插件" title="提示">
      <template #actions>
        <VButton :loading="isFetching" @click="refetch()">
          {{ $t("core.common.buttons.refresh") }}
        </VButton>
      </template>
    </VEmpty>
  </Transition>
  <Transition v-else appear name="fade">
    <div class="my-3">
      <div
        v-if="viewType === 'grid'"
        className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"
      >
        <AppCard v-for="(app, index) in data.items" :key="index" :app="app" />
      </div>
      <div v-if="viewType === 'list'" class="grid grid-cols-1 gap-3">
        <AppBlockCard
          v-for="(app, index) in data.items"
          :key="index"
          :index="index"
          :app="app"
          @open-detail-modal="handleOpenDetailModal"
        />
      </div>
    </div>
  </Transition>
  <VPagination
    v-model:page="page"
    v-model:size="size"
    :page-label="$t('core.components.pagination.page_label')"
    :size-label="$t('core.components.pagination.size_label')"
    :total-label="
      $t('core.components.pagination.total_label', { total: data?.total })
    "
    :total="data?.total"
    :size-options="[10, 20, 30, 50, 100]"
  />

  <AppDetailModal v-model:visible="detailModal" :name="selectedApp">
    <template #actions>
      <span @click="handleSelectPrevious">
        <IconArrowLeft />
      </span>
      <span @click="handleSelectNext">
        <IconArrowRight />
      </span>
    </template>
  </AppDetailModal>
</template>
