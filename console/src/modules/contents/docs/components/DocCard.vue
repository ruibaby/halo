<script lang="ts" setup>
import { VAvatar, VButton, VSpace } from "@halo-dev/components";
import { ref } from "vue";
import DocSettingModal from "./DocSettingModal.vue";

withDefaults(
  defineProps<{
    doc: Doc;
  }>(),
  {}
);

const settingModal = ref(false);
</script>

<template>
  <div
    class="cursor-pointer rounded-lg bg-white px-4 py-3 shadow transition-all hover:ring-1"
  >
    <div class="flex items-center gap-4">
      <VAvatar :src="doc.icon" size="sm" />
      <h1 class="text-base font-semibold">{{ doc.name }}</h1>
    </div>
    <ul class="mt-4 space-y-2 text-sm text-gray-600">
      <li>共 33 篇文档</li>
      <li>/docs/{{ doc.slug }}</li>
    </ul>
    <div class="mt-4 flex justify-end">
      <VSpace>
        <VButton size="sm">访问</VButton>
        <VButton
          size="sm"
          @click="$router.push({ name: 'Doc', params: { name: doc.slug } })"
        >
          编辑
        </VButton>
        <VButton size="sm" @click="settingModal = true">设置</VButton>
      </VSpace>
    </div>
  </div>

  <DocSettingModal v-model="settingModal" @close="settingModal = false" />
</template>
