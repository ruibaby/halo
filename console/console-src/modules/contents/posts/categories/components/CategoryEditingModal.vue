<script lang="ts" setup>
// core libs
import { ref } from "vue";
import { apiClient } from "@/utils/api-client";

// components
import { Toast, VButton, VModal, VSpace } from "@halo-dev/components";
import SubmitButton from "@/components/button/SubmitButton.vue";

// types
import type { Category } from "@halo-dev/api-client";

// libs
import { useI18n } from "vue-i18n";
import CategoryForm from "./CategoryForm.vue";
import type { CategoryFormState } from "../types";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

const props = withDefaults(
  defineProps<{
    category: Category;
  }>(),
  {}
);

const emit = defineEmits<{
  (event: "close"): void;
}>();

const { t } = useI18n();
const queryClient = useQueryClient();

const modal = ref();

const { mutate, isLoading } = useMutation({
  mutationKey: ["update-category"],
  mutationFn: async ({ data }: { data: CategoryFormState }) => {
    await apiClient.extension.category.updatecontentHaloRunV1alpha1Category({
      name: props.category.metadata.name,
      category: {
        ...props.category,
        spec: {
          ...props.category.spec,
          displayName: data.displayName,
          slug: data.slug,
          template: data.template,
          cover: data.cover,
          description: data.description,
        },
        metadata: {
          ...props.category.metadata,
          annotations: data.annotations,
        },
      },
    });
  },
  onSuccess() {
    emit("close");
    Toast.success(t("core.common.toast.save_success"));
    queryClient.invalidateQueries({ queryKey: ["post-categories"] });
  },
});

function onSubmit(data: CategoryFormState) {
  mutate({ data });
}
</script>
<template>
  <VModal
    ref="modal"
    :title="$t('core.post_category.editing_modal.titles.update')"
    :width="700"
    @close="emit('close')"
  >
    <CategoryForm
      :form-state="{
        displayName: category.spec.displayName,
        slug: category.spec.slug,
        template: category.spec.template,
        cover: category.spec.cover,
        description: category.spec.description,
        annotations: category.metadata.annotations,
      }"
      @submit="onSubmit"
    />

    <template #footer>
      <VSpace>
        <SubmitButton
          :loading="isLoading"
          type="secondary"
          :text="$t('core.common.buttons.submit')"
          @submit="$formkit.submit('category-form')"
        >
        </SubmitButton>
        <VButton @click="modal.close()">
          {{ $t("core.common.buttons.cancel_and_shortcut") }}
        </VButton>
      </VSpace>
    </template>
  </VModal>
</template>
