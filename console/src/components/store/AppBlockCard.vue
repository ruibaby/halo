<script lang="ts" setup>
import { relativeTimeTo } from "@/utils/date";
import { VButton } from "@halo-dev/components";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    app: any;
    index: number;
  }>(),
  {}
);

const screenshots = computed(() => {
  return props.app.application.spec.screenshots;
});

const vendor = computed(() => {
  if (props.app.application.spec.vendor) {
    return props.app.application.spec.vendor;
  }
  if (!props.app.owner) {
    return;
  }
  return {
    displayName: props.app.owner.displayName as string,
    logo: props.app.owner.avatar,
  };
});

const prependDomain = (url: string) => {
  if (url.startsWith("http") || url.startsWith("data")) {
    return url;
  }
  return `https://halo.run${url}`;
};
</script>

<template>
  <div
    class="group relative flex grid-cols-1 flex-col overflow-hidden rounded bg-white p-2 shadow-sm transition-all duration-500 hover:shadow-md hover:ring-1 sm:grid sm:grid-cols-6"
  >
    <div class="col-span-2">
      <div class="relative block">
        <div v-if="screenshots?.length !== 0" class="aspect-h-9 aspect-w-16">
          <img
            class="pointer-events-none transform-gpu rounded object-cover"
            :src="prependDomain(screenshots?.[0].url)"
            :alt="app.application.spec.displayName"
            loading="lazy"
          />
        </div>
        <div v-else class="aspect-h-9 aspect-w-16">
          <div
            class="transform-gpu rounded bg-cover bg-center bg-no-repeat"
            :style="{
              backgroundImage: `url(${prependDomain(
                app.application.spec.logo
              )})`,
            }"
          >
            <div
              class="flex h-full w-full items-center justify-center rounded backdrop-blur-3xl"
            >
              <img
                class="h-16 w-16 rounded"
                :src="prependDomain(app.application.spec.logo)"
              />
            </div>
          </div>
        </div>
        <span
          class="absolute bottom-1.5 right-1.5 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs"
          :class="
            app.application.spec.type === 'PLUGIN'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-800'
          "
        >
          {{ app.application.spec.type === "PLUGIN" ? "插件" : "主题" }}
        </span>
      </div>
    </div>
    <div
      class="relative col-span-4 grid grid-cols-1 content-between px-0 py-1 sm:px-4"
    >
      <div>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="inline-flex items-center gap-2">
            <div
              class="relative block text-base font-medium text-black transition-all"
            >
              {{ app.application.spec.displayName }}
            </div>
            <span v-if="app.latestRelease" class="text-sm text-gray-500">
              {{ app.latestRelease.spec.version }}
            </span>
          </div>

          <div
            v-if="app.latestRelease?.metadata.creationTimestamp"
            class="text-xs text-gray-500"
          >
            {{
              relativeTimeTo(app.latestRelease?.metadata.creationTimestamp)
            }}更新
          </div>
        </div>
        <p class="mt-2 line-clamp-6 text-sm font-normal text-gray-500">
          {{ app.application.spec.description }}
        </p>
      </div>
      <div class="mt-4 flex w-full flex-1 items-center justify-between gap-2">
        <div v-if="vendor" class="inline-flex items-center gap-1.5">
          <img
            v-if="vendor?.logo"
            class="h-5 w-5 rounded-full"
            :src="prependDomain(vendor?.logo)"
            :alt="vendor.displayName"
          />
          <a
            v-if="vendor?.website"
            class="text-sm text-gray-700 hover:text-gray-900"
            :href="vendor.website"
            target="_blank"
          >
            {{ vendor.displayName }}
          </a>
          <span v-else class="text-sm text-gray-700">
            {{ vendor.displayName }}
          </span>
        </div>

        <div>
          <VButton v-if="index === 3" size="sm" disabled>已安装</VButton>
          <VButton v-else-if="index === 1" size="sm" type="primary">
            可升级
          </VButton>
          <VButton v-else-if="index === 2" size="sm" disabled>
            版本不兼容
          </VButton>
          <VButton
            v-else-if="app.application.spec.priceConfig?.mode === 'ONE_TIME'"
            size="sm"
          >
            ￥{{ app.application.spec.priceConfig.oneTimePrice / 100 }}
          </VButton>
          <VButton v-else size="sm" type="default">安装</VButton>
        </div>
      </div>
    </div>
  </div>
</template>
