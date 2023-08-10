<script lang="ts" setup>
import AppCard from "@/components/store/AppCard.vue";
import {
  IconRefreshLine,
  VButton,
  VCard,
  VEmpty,
  VLoading,
  VPageHeader,
  VPagination,
  VSpace,
} from "@halo-dev/components";
import { useQuery } from "@tanstack/vue-query";
import axios from "axios";
import { ref } from "vue";
import RiApps2Line from "~icons/ri/apps-2-line";

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
</script>

<template>
  <VPageHeader title="应用市场">
    <template #icon>
      <RiApps2Line class="mr-2 self-center" />
    </template>
  </VPageHeader>

  <div class="m-0 md:m-4">
    <VCard>
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
                  v-model="selectedType"
                  label="类型"
                  :items="[
                    {
                      label: '全部',
                    },
                    {
                      value: 'THEME',
                      label: '主题',
                    },
                    {
                      value: 'PLUGIN',
                      label: '插件',
                    },
                  ]"
                />
                <FilterDropdown
                  v-model="selectedPriceMode"
                  label="价格"
                  :items="[
                    {
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
                <!-- <div class="flex flex-row gap-2">
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
                </div> -->
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
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5">
          <AppCard
            v-for="(app, index) in data.items"
            :key="index"
            :index="index"
            :app="app"
          />
        </div>
      </Transition>
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
  </div>
</template>
