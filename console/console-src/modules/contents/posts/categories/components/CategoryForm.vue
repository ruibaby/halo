<script lang="ts" setup>
import { computed } from "vue";
import type { CategoryFormState } from "../types";
import useSlugify from "@console/composables/use-slugify";
import { FormType } from "@/types/slug";
import { ref } from "vue";
import { IconRefreshLine } from "@halo-dev/components";
import AnnotationsForm from "@/components/form/AnnotationsForm.vue";
import { useThemeCustomTemplates } from "@console/modules/interface/themes/composables/use-theme";
import { nextTick } from "vue";
import { onMounted } from "vue";
import { setFocus } from "@/formkit/utils/focus";

const props = withDefaults(
  defineProps<{
    formState?: CategoryFormState;
  }>(),
  {
    formState: undefined,
  }
);

const emit = defineEmits<{
  (event: "submit", data: CategoryFormState): void;
}>();

const internalFormState = ref<CategoryFormState>(
  props.formState || {
    displayName: "",
    slug: "",
  }
);

async function onSubmit(data: CategoryFormState) {
  annotationsFormRef.value?.handleSubmit();
  await nextTick();

  const { customAnnotations, annotations, customFormInvalid, specFormInvalid } =
    annotationsFormRef.value || {};
  if (customFormInvalid || specFormInvalid) {
    return;
  }

  data.annotations = {
    ...annotations,
    ...customAnnotations,
  };

  emit("submit", data);
}

const { handleGenerateSlug } = useSlugify(
  computed(() => internalFormState.value.displayName),
  computed({
    get() {
      return internalFormState.value.slug || "";
    },
    set(value) {
      internalFormState.value.slug = value;
    },
  }),
  computed(() => !props.formState),
  FormType.CATEGORY
);

// custom templates
const { templates } = useThemeCustomTemplates("category");

// annotations
const annotationsFormRef = ref<InstanceType<typeof AnnotationsForm>>();

onMounted(() => {
  setFocus("displayNameInput");
});
</script>

<template>
  <FormKit
    id="category-form"
    v-model="internalFormState"
    type="form"
    name="category-form"
    :config="{ validationVisibility: 'submit' }"
    @submit="onSubmit"
  >
    <div>
      <div class="md:grid md:grid-cols-4 md:gap-6">
        <div class="md:col-span-1">
          <div class="sticky top-0">
            <span class="text-base font-medium text-gray-900">
              {{ $t("core.post_category.editing_modal.groups.general") }}
            </span>
          </div>
        </div>
        <div class="mt-5 divide-y divide-gray-100 md:col-span-3 md:mt-0">
          <FormKit
            v-if="!props.formState"
            name="parent"
            type="categorySelect"
            :label="$t('core.post_category.editing_modal.fields.parent.label')"
          ></FormKit>
          <FormKit
            id="displayNameInput"
            name="displayName"
            :label="
              $t('core.post_category.editing_modal.fields.display_name.label')
            "
            type="text"
            validation="required|length:0,50"
          ></FormKit>
          <FormKit
            :help="$t('core.post_category.editing_modal.fields.slug.help')"
            name="slug"
            :label="$t('core.post_category.editing_modal.fields.slug.label')"
            type="text"
            validation="required|length:0,50"
          >
            <template #suffix>
              <div
                v-tooltip="
                  $t(
                    'core.post_category.editing_modal.fields.slug.refresh_message'
                  )
                "
                class="group flex h-full cursor-pointer items-center border-l px-3 transition-all hover:bg-gray-100"
                @click="handleGenerateSlug(true, FormType.CATEGORY)"
              >
                <IconRefreshLine
                  class="h-4 w-4 text-gray-500 group-hover:text-gray-700"
                />
              </div>
            </template>
          </FormKit>
          <FormKit
            :options="templates"
            :label="
              $t('core.post_category.editing_modal.fields.template.label')
            "
            type="select"
            name="template"
          ></FormKit>
          <FormKit
            :help="$t('core.post_category.editing_modal.fields.cover.help')"
            name="cover"
            :label="$t('core.post_category.editing_modal.fields.cover.label')"
            type="attachment"
            :accepts="['image/*']"
            validation="length:0,1024"
          ></FormKit>
          <FormKit
            name="description"
            :help="
              $t('core.post_category.editing_modal.fields.description.help')
            "
            :label="
              $t('core.post_category.editing_modal.fields.description.label')
            "
            type="textarea"
            validation="length:0,200"
          ></FormKit>
        </div>
      </div>
    </div>
  </FormKit>

  <div class="py-5">
    <div class="border-t border-gray-200"></div>
  </div>

  <div class="md:grid md:grid-cols-4 md:gap-6">
    <div class="md:col-span-1">
      <div class="sticky top-0">
        <span class="text-base font-medium text-gray-900">
          {{ $t("core.post_category.editing_modal.groups.annotations") }}
        </span>
      </div>
    </div>
    <div class="mt-5 divide-y divide-gray-100 md:col-span-3 md:mt-0">
      <AnnotationsForm
        ref="annotationsFormRef"
        :value="internalFormState.annotations"
        kind="Category"
        group="content.halo.run"
      />
    </div>
  </div>
</template>
