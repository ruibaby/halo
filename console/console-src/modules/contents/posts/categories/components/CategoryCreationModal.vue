<script lang="ts" setup>
import { Toast, VButton, VModal, VSpace } from "@halo-dev/components";
import CategoryForm from "./CategoryForm.vue";
import SubmitButton from "@/components/button/SubmitButton.vue";
import { ref } from "vue";
import type { CategoryFormState } from "../types";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { apiClient } from "@/utils/api-client";
import type { Category } from "@halo-dev/api-client";
import { useI18n } from "vue-i18n";

withDefaults(
  defineProps<{
    parentCategory?: Category;
  }>(),
  {
    parentCategory: undefined,
  }
);

const emit = defineEmits<{
  (event: "close"): void;
}>();

const { t } = useI18n();
const queryClient = useQueryClient();

const modal = ref();

const { mutate, isLoading } = useMutation({
  mutationKey: ["create-category"],
  mutationFn: async ({ data }: { data: CategoryFormState }) => {
    const categoryToCreate: Category = {
      spec: {
        displayName: data.displayName,
        slug: data.slug,
        description: data.description,
        cover: data.cover,
        template: data.template,
        priority: 0,
        children: [],
      },
      apiVersion: "content.halo.run/v1alpha1",
      kind: "Category",
      metadata: {
        name: "",
        generateName: "category-",
        annotations: data.annotations,
      },
    };

    // Gets parent category, calculates priority and updates it.
    let parentCategoryToUpdate: Category | undefined = undefined;

    if (data.parent) {
      const { data: newestParent } =
        await apiClient.extension.category.getcontentHaloRunV1alpha1Category({
          name: data.parent,
        });
      parentCategoryToUpdate = newestParent;
    }

    const priority = parentCategoryToUpdate?.spec.children
      ? parentCategoryToUpdate.spec.children.length + 1
      : 0;

    categoryToCreate.spec.priority = priority;

    const { data: createdCategory } =
      await apiClient.extension.category.createcontentHaloRunV1alpha1Category({
        category: categoryToCreate,
      });

    if (parentCategoryToUpdate) {
      parentCategoryToUpdate.spec.children = Array.from(
        new Set([
          ...(parentCategoryToUpdate.spec.children || []),
          createdCategory.metadata.name,
        ])
      );

      await apiClient.extension.category.updatecontentHaloRunV1alpha1Category({
        name: data.parent as string,
        category: parentCategoryToUpdate,
      });
    }
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
    :title="$t('core.post_category.editing_modal.titles.create')"
    :width="700"
    @close="emit('close')"
  >
    <CategoryForm
      :form-state="{
        parent: parentCategory?.metadata.name,
        displayName: '',
        slug: '',
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
