<script lang="ts" setup>
import { IconAddCircle, VPageHeader } from "@halo-dev/components";
import RiBook2Line from "~icons/ri/book-2-line";
import DocCard from "./components/DocCard.vue";
import DocCreationModal from "./components/DocCreationModal.vue";
import { ref } from "vue";

const creationModal = ref(false);

const docs = ref<Doc[]>([
  {
    name: "Halo 文档",
    slug: "halo",
    icon: "https://www.halo.run/logo",
  },
  {
    name: "Halo 增强备份插件",
    slug: "plugin-backup-improved",
    icon: "https://plugin-backup-improved.pages.dev/logo.svg",
  },
]);
</script>

<template>
  <VPageHeader title="文档库">
    <template #icon>
      <RiBook2Line class="mr-2 self-center" />
    </template>
  </VPageHeader>

  <div class="m-2 md:m-4">
    <div
      class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
    >
      <DocCard v-for="doc in docs" :key="doc.name" :doc="doc" />

      <div
        class="group flex cursor-pointer items-center justify-center rounded-lg border border-dashed bg-white px-4 py-3 shadow transition-all hover:border-solid"
        @click="creationModal = true"
      >
        <IconAddCircle
          class="text-xl text-gray-600 group-hover:text-gray-900"
        />
      </div>
    </div>
  </div>

  <h1>路径规则：</h1>

  最新：
  <div>
    <ul>
      <li>/docs/halo/intro</li>
      <li>/docs/halo/zh/intro</li>
      <li>/docs/halo/en/intro</li>
    </ul>
  </div>

  带版本：

  <div>
    <ul>
      <li>/docs/halo/2.10/intro</li>
      <li>/docs/halo/2.10/zh/intro</li>
      <li>/docs/halo/2.10/en/intro</li>
    </ul>
  </div>

  <DocCreationModal v-model="creationModal" @close="creationModal = false" />
</template>
