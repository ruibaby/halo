<script lang="ts" setup>
import { IconAddCircle, VPageHeader } from "@halo-dev/components";
import RiBook2Line from "~icons/ri/book-2-line";
import DocCard from "./components/DocCard.vue";
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
      <DocCard v-for="i in 2" :key="i" />

      <div
        class="group flex cursor-pointer items-center justify-center rounded-lg border border-dashed bg-white px-4 py-3 shadow transition-all hover:border-solid"
      >
        <IconAddCircle
          class="text-xl text-gray-600 group-hover:text-gray-900"
        />
      </div>
    </div>
  </div>
</template>
