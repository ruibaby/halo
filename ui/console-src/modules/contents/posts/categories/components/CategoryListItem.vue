<script lang="ts" setup>
import { formatDatetime } from "@/utils/date";
import { usePermission } from "@/utils/permission";
import type { Category } from "@halo-dev/api-client";
import { coreApiClient } from "@halo-dev/api-client";
import {
  Dialog,
  IconEyeOff,
  IconList,
  Toast,
  VDropdownItem,
  VEntity,
  VEntityField,
  VStatusDot,
} from "@halo-dev/components";
import { useQueryClient } from "@tanstack/vue-query";
import type { PropType } from "vue";
import { ref } from "vue";
import { VueDraggable } from "vue-draggable-plus";
import { useI18n } from "vue-i18n";
import GridiconsLinkBreak from "~icons/gridicons/link-break";
import { convertCategoryTreeToCategory, type CategoryTree } from "../utils";
import CategoryEditingModal from "./CategoryEditingModal.vue";

const { currentUserHasPermission } = usePermission();

withDefaults(defineProps<{ isChildLevel?: boolean }>(), {});

const categories = defineModel({
  type: Array as PropType<CategoryTree[]>,
  default: [],
});

const emit = defineEmits<{
  (event: "change"): void;
}>();

const queryClient = useQueryClient();
const { t } = useI18n();

function onChange() {
  emit("change");
}

// Editing category
const editingModal = ref(false);
const selectedCategory = ref<Category>();
const selectedParentCategory = ref<Category>();

function onEditingModalClose() {
  selectedCategory.value = undefined;
  selectedParentCategory.value = undefined;
  editingModal.value = false;
}

const handleOpenEditingModal = (category: CategoryTree) => {
  selectedCategory.value = convertCategoryTreeToCategory(category);
  editingModal.value = true;
};

const handleOpenCreateByParentModal = (category: CategoryTree) => {
  selectedParentCategory.value = convertCategoryTreeToCategory(category);
  editingModal.value = true;
};

const handleDelete = async (category: CategoryTree) => {
  Dialog.warning({
    title: t("core.post_category.operations.delete.title"),
    description: t("core.post_category.operations.delete.description"),
    confirmType: "danger",
    confirmText: t("core.common.buttons.confirm"),
    cancelText: t("core.common.buttons.cancel"),
    onConfirm: async () => {
      try {
        await coreApiClient.content.category.deleteCategory({
          name: category.metadata.name,
        });

        Toast.success(t("core.common.toast.delete_success"));

        queryClient.invalidateQueries({ queryKey: ["post-categories"] });
      } catch (e) {
        console.error("Failed to delete tag", e);
      }
    },
  });
};
</script>
<template>
  <VueDraggable
    v-model="categories"
    class="box-border h-full w-full divide-y divide-gray-100"
    ghost-class="opacity-50"
    group="category-item"
    handle=".drag-element"
    tag="ul"
    @sort="onChange"
  >
    <CategoryEditingModal
      v-if="editingModal"
      :is-child-level-category="isChildLevel"
      :category="selectedCategory"
      :parent-category="selectedParentCategory"
      @close="onEditingModalClose"
    />
    <li v-for="category in categories" :key="category.metadata.name">
      <VEntity>
        <template #prepend>
          <div
            v-permission="['system:posts:manage']"
            class="drag-element absolute inset-y-0 left-0 hidden w-3.5 cursor-move items-center bg-gray-100 transition-all hover:bg-gray-200 group-hover:flex"
          >
            <IconList class="h-3.5 w-3.5" />
          </div>
        </template>
        <template #start>
          <VEntityField :title="category.spec.displayName">
            <template #description>
              <a
                v-if="category.status?.permalink"
                :href="category.status.permalink"
                :title="category.status.permalink"
                target="_blank"
                class="truncate text-xs text-gray-500 group-hover:text-gray-900"
              >
                {{ category.status.permalink }}
              </a>
            </template>
          </VEntityField>
        </template>
        <template #end>
          <VEntityField v-if="category.metadata.deletionTimestamp">
            <template #description>
              <VStatusDot
                v-tooltip="$t('core.common.status.deleting')"
                state="warning"
                animate
              />
            </template>
          </VEntityField>
          <VEntityField v-if="category.spec.hideFromList">
            <template #description>
              <IconEyeOff
                v-tooltip="$t('core.post_category.list.fields.hide_from_list')"
                class="cursor-pointer text-sm transition-all hover:text-blue-600"
              />
            </template>
          </VEntityField>
          <VEntityField v-if="category.spec.preventParentPostCascadeQuery">
            <template #description>
              <GridiconsLinkBreak
                v-tooltip="
                  $t(
                    'core.post_category.list.fields.prevent_parent_post_cascade_query'
                  )
                "
                class="cursor-pointer text-sm transition-all hover:text-blue-600"
              />
            </template>
          </VEntityField>
          <VEntityField
            :description="
              $t('core.common.fields.post_count', {
                count: category.status?.postCount || 0,
              })
            "
          />
          <VEntityField>
            <template #description>
              <span class="truncate text-xs tabular-nums text-gray-500">
                {{ formatDatetime(category.metadata.creationTimestamp) }}
              </span>
            </template>
          </VEntityField>
        </template>
        <template
          v-if="currentUserHasPermission(['system:posts:manage'])"
          #dropdownItems
        >
          <VDropdownItem
            v-permission="['system:posts:manage']"
            @click="handleOpenEditingModal(category)"
          >
            {{ $t("core.common.buttons.edit") }}
          </VDropdownItem>
          <VDropdownItem @click="handleOpenCreateByParentModal(category)">
            {{ $t("core.post_category.operations.add_sub_category.button") }}
          </VDropdownItem>
          <VDropdownItem
            v-permission="['system:posts:manage']"
            type="danger"
            @click="handleDelete(category)"
          >
            {{ $t("core.common.buttons.delete") }}
          </VDropdownItem>
        </template>
      </VEntity>
      <CategoryListItem
        v-model="category.spec.children"
        is-child-level
        class="pl-10 transition-all duration-300"
        @change="onChange"
      />
    </li>
  </VueDraggable>
</template>
