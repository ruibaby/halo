<script lang="ts" setup>
import { VButton, VModal, VSpace } from "@halo-dev/components";

const visible = defineModel({ type: Boolean, default: false });

const emit = defineEmits<{
  (event: "close"): void;
}>();
</script>

<template>
  <VModal
    v-model:visible="visible"
    :width="600"
    title="创建新文档"
    :centered="false"
    @close="emit('close')"
  >
    <FormKit type="form">
      <FormKit type="text" label="名称" />
      <FormKit type="text" label="别名" help="访问规则为 /docs/{别名}/" />
      <FormKit type="attachment" label="图标" />
    </FormKit>
    <template #footer>
      <VSpace>
        <VButton type="secondary" @click="emit('close')">创建</VButton>
        <VButton type="default" @click="emit('close')">取消</VButton>
      </VSpace>
    </template>
  </VModal>
</template>
