<script lang="ts" setup>
// core libs
import { ref } from "vue";
import { apiClient } from "@/utils/api-client";

// components
import {
  IconAddCircle,
  IconBookRead,
  VButton,
  VCard,
  VEmpty,
  VPageHeader,
  VSpace,
  VLoading,
} from "@halo-dev/components";
import CategoryListItem from "./components/CategoryListItem.vue";

// types
import type { Category } from "@halo-dev/api-client";
import type { CategoryTree } from "./utils";
import {
  convertCategoryTreeToCategory,
  convertTreeToCategories,
  resetCategoriesTreePriority,
} from "./utils";

// libs
import { useDebounceFn } from "@vueuse/core";

// hooks
import { usePostCategory } from "./composables/use-post-category";
import CategoryCreationModal from "./components/CategoryCreationModal.vue";

const editingModal = ref(false);
const selectedParentCategory = ref<Category>();

const {
  categories,
  categoriesTree,
  isLoading,
  handleFetchCategories,
  handleDelete,
} = usePostCategory();

const handleUpdateInBatch = useDebounceFn(async () => {
  const categoriesTreeToUpdate = resetCategoriesTreePriority(
    categoriesTree.value
  );
  const categoriesToUpdate = convertTreeToCategories(categoriesTreeToUpdate);
  try {
    const promises = categoriesToUpdate.map((category) =>
      apiClient.extension.category.updatecontentHaloRunV1alpha1Category({
        name: category.metadata.name,
        category: category,
      })
    );
    await Promise.all(promises);
  } catch (e) {
    console.error("Failed to update categories", e);
  } finally {
    await handleFetchCategories();
  }
}, 500);

const handleOpenCreateByParentModal = (category: CategoryTree) => {
  selectedParentCategory.value = convertCategoryTreeToCategory(category);
  editingModal.value = true;
};

const categoryCreationModalVisible = ref(false);
</script>
<template>
  <CategoryCreationModal
    v-if="categoryCreationModalVisible"
    @close="categoryCreationModalVisible = false"
  />
  <VPageHeader :title="$t('core.post_category.title')">
    <template #icon>
      <IconBookRead class="mr-2 self-center" />
    </template>

    <template #actions>
      <VButton
        v-permission="['system:posts:manage']"
        type="secondary"
        @click="categoryCreationModalVisible = true"
      >
        <template #icon>
          <IconAddCircle class="h-full w-full" />
        </template>
        {{ $t("core.common.buttons.new") }}
      </VButton>
    </template>
  </VPageHeader>
  <div class="m-0 md:m-4">
    <VCard :body-class="['!p-0']">
      <template #header>
        <div class="block w-full bg-gray-50 px-4 py-3">
          <div
            class="relative flex flex-col items-start sm:flex-row sm:items-center"
          >
            <div class="flex w-full flex-1 sm:w-auto">
              <span class="text-base font-medium">
                {{
                  $t("core.post_category.header.title", {
                    count: categories?.length || 0,
                  })
                }}
              </span>
            </div>
          </div>
        </div>
      </template>
      <VLoading v-if="isLoading" />
      <Transition v-else-if="!categories?.length" appear name="fade">
        <VEmpty
          :message="$t('core.post_category.empty.message')"
          :title="$t('core.post_category.empty.title')"
        >
          <template #actions>
            <VSpace>
              <VButton @click="handleFetchCategories">
                {{ $t("core.common.buttons.refresh") }}
              </VButton>
              <VButton
                v-permission="['system:posts:manage']"
                type="primary"
                @click="editingModal = true"
              >
                <template #icon>
                  <IconAddCircle class="h-full w-full" />
                </template>
                {{ $t("core.common.buttons.new") }}
              </VButton>
            </VSpace>
          </template>
        </VEmpty>
      </Transition>
      <Transition v-else appear name="fade">
        <CategoryListItem
          :categories="categoriesTree"
          @change="handleUpdateInBatch"
          @delete="handleDelete"
          @open-create-by-parent="handleOpenCreateByParentModal"
        />
      </Transition>
    </VCard>
  </div>
</template>
