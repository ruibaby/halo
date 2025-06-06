<script lang="ts" setup>
import { setFocus } from "@/formkit/utils/focus";
import { usePostCategory } from "@console/modules/contents/posts/categories/composables/use-post-category";
import type { Category } from "@halo-dev/api-client";
import {
  IconArrowDown,
  VDropdown,
  VEntity,
  VEntityContainer,
  VEntityField,
} from "@halo-dev/components";
import Fuse from "fuse.js";
import { computed, ref, watch } from "vue";

const props = withDefaults(
  defineProps<{
    label: string;
    modelValue?: string;
  }>(),
  {
    modelValue: undefined,
  }
);

const emit = defineEmits<{
  (event: "update:modelValue", value?: string): void;
}>();

const { categories } = usePostCategory();

const dropdown = ref();

const handleSelect = (category: Category) => {
  if (category.metadata.name === props.modelValue) {
    emit("update:modelValue", undefined);
  } else {
    emit("update:modelValue", category.metadata.name);
  }

  dropdown.value.hide();
};

function onDropdownShow() {
  setTimeout(() => {
    setFocus("categoryFilterDropdownInput");
  }, 200);
}

// search
const keyword = ref("");

let fuse: Fuse<Category> | undefined = undefined;

watch(
  () => categories.value,
  () => {
    fuse = new Fuse(categories.value || [], {
      keys: ["spec.displayName", "metadata.name"],
      useExtendedSearch: true,
      threshold: 0.2,
    });
  },
  {
    immediate: true,
  }
);

const searchResults = computed(() => {
  if (!fuse || !keyword.value) {
    return categories.value;
  }

  return fuse?.search(keyword.value).map((item) => item.item);
});

const selectedCategory = computed(() => {
  return categories.value?.find(
    (category) => category.metadata.name === props.modelValue
  );
});
</script>

<template>
  <VDropdown ref="dropdown" :classes="['!p-0']" @show="onDropdownShow">
    <div
      class="flex cursor-pointer select-none items-center text-sm text-gray-700 hover:text-black"
      :class="{ 'font-semibold text-gray-700': modelValue !== undefined }"
    >
      <span v-if="!selectedCategory" class="mr-0.5">
        {{ label }}
      </span>
      <span v-else class="mr-0.5">
        {{ label }}：{{ selectedCategory.spec.displayName }}
      </span>
      <span>
        <IconArrowDown />
      </span>
    </div>
    <template #popper>
      <div class="h-96 w-80">
        <div class="border-b border-b-gray-100 bg-white p-4">
          <FormKit
            id="categoryFilterDropdownInput"
            v-model="keyword"
            :placeholder="$t('core.common.placeholder.search')"
            type="text"
          ></FormKit>
        </div>
        <div>
          <VEntityContainer>
            <VEntity
              v-for="category in searchResults"
              :key="category.metadata.name"
              :is-selected="modelValue === category.metadata.name"
              @click="handleSelect(category)"
            >
              <template #start>
                <VEntityField
                  :title="category.spec.displayName"
                  :description="category.status?.permalink"
                />
              </template>
              <template #end>
                <VEntityField
                  :description="
                    $t('core.common.fields.post_count', {
                      count: category.status?.postCount || 0,
                    })
                  "
                />
              </template>
            </VEntity>
          </VEntityContainer>
        </div>
      </div>
    </template>
  </VDropdown>
</template>
