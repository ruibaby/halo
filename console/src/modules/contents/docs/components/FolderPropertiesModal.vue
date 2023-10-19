<script lang="ts" setup>
import { VButton, VModal, VSpace } from "@halo-dev/components";
import { ref } from "vue";

const visible = defineModel({ type: Boolean, default: false });

const emit = defineEmits<{
  (event: "close"): void;
}>();

const isLanguage = ref(false);
</script>

<template>
  <VModal
    v-model:visible="visible"
    :width="600"
    title="文件夹属性"
    :centered="false"
    @close="emit('close')"
  >
    <FormKit type="form">
      <FormKit v-model="isLanguage" type="checkbox" label="设置为语言目录" />
      <FormKit
        v-if="isLanguage"
        type="text"
        label="语言标识"
        help="访问路径为 /docs/halo/{language}/"
      />
      <FormKit v-if="isLanguage" type="checkbox" label="设置为默认语言" />
    </FormKit>
    <template #footer>
      <VSpace>
        <VButton type="secondary" @click="emit('close')">保存</VButton>
        <VButton type="default" @click="emit('close')">取消</VButton>
      </VSpace>
    </template>
  </VModal>
</template>
