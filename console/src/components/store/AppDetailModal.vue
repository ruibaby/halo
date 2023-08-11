<script lang="ts" setup>
import { relativeTimeTo } from "@/utils/date";
import {
  IconLink,
  VButton,
  VLoading,
  VModal,
  VSpace,
  VTabItem,
  VTabs,
} from "@halo-dev/components";
import { useQuery } from "@tanstack/vue-query";
import axios from "axios";
import { ref } from "vue";
import { computed } from "vue";
import TablerGraph from "~icons/tabler/graph";
import TablerDownload from "~icons/tabler/download";
import TablerCloudDownload from "~icons/tabler/cloud-download";
import prettyBytes from "pretty-bytes";
import { toRefs } from "vue";

const props = withDefaults(
  defineProps<{
    visible: boolean;
    name?: string;
  }>(),
  {
    visible: false,
    name: undefined,
  }
);

const emit = defineEmits<{
  (event: "update:visible", visible: boolean): void;
  (event: "close"): void;
}>();

const onVisibleChange = (visible: boolean) => {
  emit("update:visible", visible);
  if (!visible) {
    setTimeout(() => {
      emit("close");
    }, 200);
  }
};

const { name, visible } = toRefs(props);

const {
  data: app,
  isLoading,
  isFetching,
} = useQuery({
  queryKey: ["store-app", name, visible],
  queryFn: async () => {
    const { data } = await axios.get(
      `https://halo.run/apis/api.store.halo.run/v1alpha1/applications/${props.name}`
    );
    return data;
  },
  enabled: computed(() => visible.value && !!name.value),
});

const { data: releases } = useQuery({
  queryKey: ["store-app-releases", name, visible],
  queryFn: async () => {
    const { data } = await axios.get(
      `https://halo.run/apis/api.store.halo.run/v1alpha1/applications/${props.name}/releases`
    );
    return data;
  },
  enabled: computed(
    () => visible.value && !!name.value && activeId.value === "releases"
  ),
});

const title = computed(() => {
  if (isLoading.value) {
    return "加载中...";
  }
  return `应用：${app.value?.application.spec.displayName}`;
});

const activeId = ref("readme");

const prependDomain = (url: string) => {
  if (url.startsWith("http") || url.startsWith("data")) {
    return url;
  }
  return `https://halo.run${url}`;
};
</script>

<template>
  <VModal
    :title="title"
    :visible="visible"
    :width="1200"
    :layer-closable="true"
    height="calc(100vh - 20px)"
    :mount-to-body="true"
    @update:visible="onVisibleChange"
  >
    <template #actions>
      <slot name="actions" />
      <span
        v-tooltip="{
          content: '跳转到 halo.run',
          delay: 300,
        }"
      >
        <a :href="`https://halo.run/store/apps/${name}`" target="_blank">
          <IconLink />
        </a>
      </span>
    </template>
    <div>
      <VLoading v-if="isLoading || isFetching" />
      <div
        v-else-if="app"
        class="flex flex-col-reverse gap-5 sm:grid sm:grid-cols-8"
      >
        <aside class="col-span-3 sm:sticky sm:top-0 sm:h-screen lg:col-span-2">
          <ul role="list" class="divide-y divide-gray-200">
            <li class="flex pb-4">
              <div class="space-y-2">
                <h2 class="text-base font-medium text-gray-900">发布者</h2>
                <p class="text-sm text-gray-500">
                  {{ app?.owner.displayName }}
                </p>
              </div>
            </li>
            <li v-if="app.application.spec.vendor" class="flex py-4">
              <div class="space-y-2">
                <h2 class="text-base font-medium text-gray-900">作者</h2>
                <p class="text-sm text-gray-500">
                  <a
                    :href="app.application.spec.vendor.website"
                    class="hover:text-gray-900"
                    target="_blank"
                  >
                    {{ app.application.spec.vendor.displayName }}
                  </a>
                </p>
              </div>
            </li>
            <li v-if="app.latestRelease" class="flex py-4">
              <div class="space-y-2">
                <h2 class="text-base font-medium text-gray-900">版本</h2>
                <p class="text-sm text-gray-500">
                  {{ app.latestRelease.release.spec.version }}
                </p>
              </div>
            </li>
            <li v-if="app.latestRelease" class="flex py-4">
              <div class="space-y-2">
                <h2 class="text-base font-medium text-gray-900">Halo 版本</h2>
                <p class="text-sm text-gray-500">
                  {{ app.latestRelease.release.spec.requires }}
                </p>
              </div>
            </li>
            <li
              v-if="app.application.spec.licenses?.length !== 0"
              class="flex py-4"
            >
              <div class="space-y-2">
                <h2 class="text-base font-medium text-gray-900">协议</h2>
                <div class="text-sm text-gray-500">
                  <a
                    v-if="app.application.spec.licenses.length === 1"
                    :href="app.application.spec.licenses[0].url"
                    class="hover:text-gray-900"
                    target="_blank"
                  >
                    {{ app.application.spec.licenses[0].name }}
                  </a>
                  <ul v-else class="list-inside list-disc space-y-1 pl-0.5">
                    <li
                      v-for="(license, index) in app.application.spec.licenses"
                      :key="index"
                    >
                      <a
                        target="_blank"
                        :href="license.url"
                        class="hover:text-gray-900"
                      >
                        {{ license.name }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              v-if="
                app.application.spec.openSource &&
                !app.application.spec.openSource.closed
              "
              class="flex py-4"
            >
              <div class="space-y-2">
                <h2 class="text-base font-medium text-gray-900">仓库地址</h2>
                <p class="text-sm text-gray-500">
                  <a
                    :href="app.application.spec.openSource.repo"
                    class="hover:text-gray-900"
                    target="_blank"
                  >
                    {{ app.application.spec.openSource.repo }}
                  </a>
                </p>
              </div>
            </li>
            <li v-if="app.application.spec.links?.length > 0" class="flex py-4">
              <div class="space-y-2">
                <h2 class="text-base font-medium text-gray-900">链接</h2>
                <div class="text-sm text-gray-500">
                  <ul class="list-inside list-disc space-y-1 pl-0.5">
                    <li
                      v-for="(link, index) in app.application.spec.links"
                      :key="index"
                    >
                      <a
                        target="_blank"
                        :href="link.url"
                        class="hover:text-gray-900"
                      >
                        {{ link.name }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="flex py-4">
              <div class="w-full space-y-2">
                <h2 class="text-base font-medium text-gray-900">数据</h2>
                <div>
                  <div class="grid grid-cols-2 rounded-lg border">
                    <div class="flex border-r p-3">
                      <div class="flex flex-col gap-1">
                        <div class="inline-flex items-center gap-1">
                          <TablerGraph class="text-green-600" />
                          <span class="text-xs text-gray-500">浏览</span>
                        </div>
                        <span class="font-semibold tabular-nums">
                          {{ app.views }}
                        </span>
                      </div>
                    </div>
                    <div class="flex p-3">
                      <div class="flex flex-col gap-1">
                        <div class="inline-flex items-center gap-1">
                          <TablerDownload class="text-indigo-600" />
                          <span class="text-xs text-gray-500">下载</span>
                        </div>
                        <span class="font-semibold tabular-nums">
                          {{ app.downloads }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="flex py-4">
              <div class="space-y-2">
                <h2 class="text-base font-medium text-gray-900">更多</h2>
                <div class="flex flex-col gap-1 text-sm text-gray-500">
                  <span>
                    发布日期：{{
                      relativeTimeTo(app.application.metadata.creationTimestamp)
                    }}
                  </span>
                  <span>
                    最后更新日期：{{
                      relativeTimeTo(
                        app.latestRelease.release.metadata.creationTimestamp
                      )
                    }}
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </aside>
        <div class="col-span-5 lg:col-span-6">
          <div class="flex flex-wrap items-center gap-4">
            <div v-if="app.application.spec.logo" class="flex justify-center">
              <img
                class="h-16 w-16 rounded"
                :src="prependDomain(app.application.spec.logo)"
                :alt="app.application.spec.displayName"
              />
            </div>
            <div>
              <div class="flex flex-wrap items-center gap-3">
                <h1 class="text-xl font-medium text-gray-900">
                  {{ app.application.spec.displayName }}
                </h1>
                <span
                  v-if="false"
                  class="inline-flex items-center gap-x-1.5 rounded-md bg-purple-100 px-1.5 py-0.5 text-xs font-medium text-purple-700"
                >
                  <i
                    class="i-tabler-circle-filled !h-2 !w-2 text-purple-500"
                  ></i>
                  已购买
                </span>
              </div>
              <p
                v-if="app.application.spec.description"
                class="mt-2 text-sm text-gray-600"
              >
                {{ app.application.spec.description }}
              </p>
            </div>
          </div>
          <div class="mt-5">
            <div id="app-detail-tabs">
              <VTabs v-model:active-id="activeId">
                <VTabItem id="readme" label="简介">
                  <div
                    v-if="app.application.spec.screenshots?.length !== 0"
                    id="screenshots-target"
                    class="flex flex-1 overflow-auto rounded-md bg-gray-100 p-2"
                  >
                    <ul role="list" class="flex min-h-min gap-2">
                      <li
                        v-for="(screenshot, index) in app.application.spec
                          .screenshots"
                        :key="index"
                        class="group relative w-72 cursor-pointer overflow-hidden rounded"
                      >
                        <div
                          class="group aspect-h-10 aspect-w-16 block w-full bg-gray-100"
                        >
                          <img
                            :src="prependDomain(screenshot.url)"
                            :alt="screenshot.description"
                            class="h-full w-full transform-gpu object-cover transition-all group-hover:opacity-75"
                            loading="lazy"
                          />
                        </div>
                        <p
                          class="absolute bottom-0 hidden h-1/3 w-full content-end justify-center truncate bg-gradient-to-t from-gray-300 to-transparent p-1 text-xs text-slate-200 ease-in-out group-hover:grid"
                        >
                          {{ screenshot.description }}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <article
                    id="app-readme-target"
                    class="markdown-body !mt-4 !bg-transparent"
                    v-html="app.readme.html"
                  ></article>
                </VTabItem>
                <VTabItem id="releases" label="版本">
                  <div id="app-releases">
                    <div class="flex flex-col gap-4">
                      <div
                        v-for="(release, index) in releases"
                        :key="index"
                        class="flex flex-col gap-4 lg:flex-row"
                      >
                        <div class="w-48">
                          <h2 class="text-xl font-semibold">
                            {{ release.release.spec.version }}
                          </h2>
                          <div
                            class="inline-flex flex-col items-start gap-1 text-xs text-gray-600"
                          >
                            <span>{{ release.owner.displayName }}</span
                            ><span title="2023-08-01 17:22"
                              >发布于
                              {{
                                relativeTimeTo(
                                  release.release.metadata.creationTimestamp
                                )
                              }}</span
                            >
                          </div>
                        </div>
                        <div class="flex-1 rounded-md border">
                          <div class="flex items-center justify-between p-4">
                            <div
                              class="inline-flex flex-wrap items-center space-x-3"
                            >
                              <h1 class="text-2xl font-bold sm:text-3xl">
                                {{ release.release.spec.displayName }}
                              </h1>
                              <span
                                v-if="release.latest"
                                class="inline-flex items-center rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800"
                              >
                                最新
                              </span>
                              <span
                                v-if="release.release.spec.preRelease"
                                className="inline-flex items-center rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800"
                              >
                                预发布
                              </span>
                            </div>
                            <div class="text-sm text-gray-600">
                              {{ release.release.spec.requires }}
                            </div>
                          </div>
                          <article
                            class="markdown-body border-t !bg-transparent p-4"
                            v-html="release.notes?.html"
                          ></article>
                          <div
                            v-if="release.assets?.length !== 0"
                            class="border-t p-4"
                          >
                            <div class="mb-4 inline-flex items-center">
                              <TablerCloudDownload class="mr-2 !h-5 !w-5" />
                              <h2 class="text-base font-semibold">资源下载</h2>
                            </div>
                            <ul
                              class="divide-y divide-gray-200 overflow-hidden rounded-md border"
                            >
                              <li
                                v-for="asset in release.assets"
                                :key="asset.metadata.name"
                                class="flex cursor-pointer items-center justify-between px-3 py-2 hover:bg-gray-100"
                              >
                                <div
                                  class="inline-flex flex-col gap-0.5 truncate"
                                >
                                  <span class="truncate text-sm font-semibold">
                                    {{ asset.spec.name }}
                                  </span>
                                  <span class="text-xs text-gray-600">
                                    {{ prettyBytes(asset.spec.size || 0) }}
                                  </span>
                                </div>
                                <div>
                                  <span
                                    class="text-sm text-blue-600 hover:text-blue-500"
                                  >
                                    下载
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </VTabItem>
                <VTabItem id="comment" label="讨论"> </VTabItem>
              </VTabs>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <VSpace>
        <VButton type="secondary">安装</VButton>
        <VButton @click="onVisibleChange(false)">关闭</VButton>
      </VSpace>
    </template>
  </VModal>
</template>
