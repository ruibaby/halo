<script lang="ts" setup>
import UppyUpload from "@/components/upload/UppyUpload.vue";
import AppDownloadAlert from "@/components/common/AppDownloadAlert.vue";
</script>

<template>
  <div class="px-4 py-3">
    <div class="pb-3">
      <AppDownloadAlert />
    </div>

    <UppyUpload
      :restrictions="{
        maxNumberOfFiles: 1,
        allowedFileTypes: ['.jar'],
      }"
      :endpoint="endpoint"
      auto-proceed
      @uploaded="onUploaded"
      @error="onError"
    />
  </div>
</template>
