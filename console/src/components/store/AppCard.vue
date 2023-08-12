<script lang="ts" setup>
import { VButton } from "@halo-dev/components";
import { ref } from "vue";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    app: any;
    index: number;
  }>(),
  {}
);

const emit = defineEmits<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (event: "open-detail-modal", app: any): void;
}>();

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

const installing = ref(false);
</script>

<template>
  <div
    class="relative grid grid-cols-1 content-between overflow-hidden rounded bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:ring-1"
  >
    <div>
      <div
        class="relative block"
        :href="`/store/apps/${app.application.metadata.name}`"
      >
        <div v-if="screenshots?.length !== 0" class="aspect-h-1 aspect-w-2">
          <img
            class="pointer-events-none transform-gpu object-cover"
            :src="prependDomain(screenshots?.[0].url)"
            :alt="app.application.spec.displayName"
            loading="lazy"
          />
        </div>
        <div v-else class="aspect-h-1 aspect-w-2">
          <div
            class="transform-gpu bg-cover bg-center bg-no-repeat"
            :style="{
              backgroundImage: `url(${prependDomain(
                app.application.spec.logo
              )})`,
            }"
          >
            <div
              class="flex h-full w-full items-center justify-center backdrop-blur-3xl"
            >
              <img
                class="h-16 w-16 transform-gpu rounded"
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

      <div class="flex flex-row items-center gap-3 px-3 py-2">
        <div class="flex flex-1 flex-col gap-1">
          <div class="inline-flex flex-row items-center gap-2">
            <div
              class="cursor-pointer text-sm font-semibold text-gray-800 hover:text-gray-600 hover:underline"
              @click="emit('open-detail-modal', app)"
            >
              {{ app.application.spec.displayName }}
            </div>
            <span v-if="app.latestRelease" class="text-xs text-gray-500">
              {{ app.latestRelease.spec.version }}
            </span>
          </div>
          <div class="line-clamp-2 text-xs text-gray-600">
            {{ app.application.spec.description }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-2 p-3">
      <div class="flex justify-between gap-1">
        <div v-if="vendor" class="inline-flex items-center gap-1.5">
          <img
            v-if="vendor.logo"
            class="h-5 w-5 rounded-full"
            :src="prependDomain(vendor.logo)"
            :alt="vendor.displayName"
          />
          <a
            v-if="vendor.website"
            class="text-xs text-gray-700 hover:text-gray-900"
            :href="vendor.website"
            target="_blank"
          >
            {{ vendor.displayName }}
          </a>
          <span v-else class="text-xs text-gray-700">
            {{ vendor.displayName }}
          </span>
        </div>
        <div class="inline-flex items-center justify-between gap-1">
          <VButton v-if="index === 3" size="sm" disabled>已安装</VButton>
          <VButton
            v-else-if="index === 1"
            :loading="installing"
            size="sm"
            type="primary"
            @click="installing = true"
          >
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
          <VButton
            v-else
            size="sm"
            type="default"
            :loading="installing"
            @click="installing = true"
          >
            安装
          </VButton>
        </div>
      </div>
    </div>
  </div>
</template>
