<script lang="ts" setup>
import AppBlockCard from "@/components/store/AppBlockCard.vue";
import AppCard from "@/components/store/AppCard.vue";
import AppDetailModal from "@/components/store/AppDetailModal.vue";
import {
  IconArrowLeft,
  IconArrowRight,
  IconGrid,
  IconList,
  IconRefreshLine,
  VAvatar,
  VButton,
  VCard,
  VEmpty,
  VLoading,
  VPageHeader,
  VPagination,
  VSpace,
} from "@halo-dev/components";
import { useQuery } from "@tanstack/vue-query";
import { useLocalStorage } from "@vueuse/core";
import axios from "axios";
import { nextTick } from "vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import RiApps2Line from "~icons/ri/apps-2-line";

const Types = [
  {
    label: "全部",
  },
  {
    value: "THEME",
    label: "主题",
  },
  {
    value: "PLUGIN",
    label: "插件",
  },
];

const PriceModes = [
  {
    label: "全部",
  },
  {
    value: "FREE",
    label: "免费",
  },
  {
    value: "ONE_TIME",
    label: "付费",
  },
];

const { t } = useI18n();

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
const selectedPriceMode = ref();
const selectedType = ref();

const { data, isFetching, isLoading, refetch } = useQuery({
  queryKey: [
    "store-apps",
    keyword,
    selectedSort,
    page,
    size,
    selectedPriceMode,
    selectedType,
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
          type: selectedType.value,
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

const auth = ref(false);
</script>

<template>
  <VPageHeader title="应用市场">
    <template #icon>
      <RiApps2Line class="mr-2 self-center" />
    </template>
    <template #actions>
      <div class="flex items-center">
        <VButton v-if="!auth" size="sm" @click="auth = true">授权</VButton>
        <div v-else class="inline-flex items-center gap-2">
          <VAvatar src="https://ryanc.cc/avatar" circle size="xs"></VAvatar>
          <span class="text-sm font-semibold text-gray-900">Ryan Wang</span>
        </div>
      </div>
    </template>
  </VPageHeader>

  <div class="m-0 md:m-4">
    <VCard class="overflow-visible">
      <template #header>
        <div class="block w-full bg-gray-50 px-4 py-3">
          <div
            class="relative flex flex-col items-start sm:flex-row sm:items-center"
          >
            <div class="flex w-full flex-1 items-center sm:w-auto">
              <SearchInput v-model="keyword" />
            </div>
            <div class="mt-4 flex sm:mt-0">
              <VSpace spacing="lg">
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
                      'bg-gray-200 font-bold text-black':
                        viewType === item.name,
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
      </template>
      <div class="grid grid-cols-12 gap-5">
        <aside class="sticky top-0 hidden h-screen sm:col-span-2 sm:block">
          <ul role="list" class="divide-y divide-gray-200">
            <li class="flex py-4 pt-0">
              <div class="space-y-2">
                <h2 class="text-base font-medium text-gray-900">类型</h2>
                <div>
                  <fieldset class="mt-4">
                    <div class="space-y-4">
                      <div
                        v-for="(type, index) in Types"
                        :key="index"
                        class="flex items-center"
                      >
                        <input
                          :id="`type-${type.label}`"
                          v-model="selectedType"
                          name="type"
                          type="radio"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          :value="type.value"
                        />
                        <label
                          :for="`type-${type.label}`"
                          class="ml-3 block cursor-pointer text-sm font-medium text-gray-700"
                        >
                          {{ type.label }}
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </li>
            <li class="flex py-4">
              <div class="space-y-2">
                <h2 class="text-base font-medium text-gray-900">价格</h2>
                <div>
                  <fieldset class="mt-4">
                    <div class="space-y-4">
                      <div
                        v-for="(priceMode, index) in PriceModes"
                        :key="index"
                        class="flex items-center"
                      >
                        <input
                          :id="`priceMode-${priceMode.label}`"
                          v-model="selectedPriceMode"
                          name="priceMode"
                          type="radio"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          :value="priceMode.value"
                        />
                        <label
                          :for="`priceMode-${priceMode.label}`"
                          class="ml-3 block cursor-pointer text-sm font-medium text-gray-700"
                        >
                          {{ priceMode.label }}
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </li>
          </ul>
        </aside>
        <div class="col-span-12 sm:col-span-10">
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
            <div>
              <div
                v-if="viewType === 'grid'"
                class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                <AppCard
                  v-for="(app, index) in data.items"
                  :key="index"
                  :app="app"
                  :index="index"
                  @open-detail-modal="handleOpenDetailModal"
                />
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
        </div>
      </div>
      <template #footer>
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
      </template>
    </VCard>

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
  </div>
</template>
