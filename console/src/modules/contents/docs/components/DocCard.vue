<script lang="ts" setup>
import { VAvatar } from "@halo-dev/components";
</script>

<template>
  <div
    class="cursor-pointer rounded-lg bg-white px-4 py-3 shadow transition-all hover:ring-1"
    @click="$router.push({ name: 'Doc', params: { name: 1 } })"
  >
    <div class="flex items-center gap-4">
      <VAvatar src="https://www.halo.run/logo" size="sm" />
      <h1 class="text-base font-semibold">Halo 文档</h1>
    </div>
    <ul class="mt-4 space-y-1 text-sm text-gray-600">
      <li>共 33 篇文档</li>
      <li>/docs/halo</li>
    </ul>
  </div>
</template>
