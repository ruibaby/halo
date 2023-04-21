<script lang="ts" setup></script>

<template>
  <a v-bind="$attrs" class="link-wrapper">
    <slot />
  </a>
</template>

<style lang="scss">
.link-wrapper {
  @apply text-sm hover:underline underline-offset-4 inline-flex items-center text-gray-900 hover:text-gray-600;
}
</style>
