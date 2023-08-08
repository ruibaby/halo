<script lang="ts" setup>
import { IconPlug, VCard, VPageHeader, VTabbar } from "@halo-dev/components";
import { markRaw } from "vue";
import { shallowRef } from "vue";
import UploadTab from "./installation-tabs/Upload.vue";
import RemoteTab from "./installation-tabs/Remote.vue";
import { useRouteQuery } from "@vueuse/router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const tabs = shallowRef([
  {
    id: "backups",
    label: t("core.plugin.upload_modal.tabs.local"),
    component: markRaw(UploadTab),
  },
  {
    id: "restore",
    label: t("core.plugin.upload_modal.tabs.remote.title"),
    component: markRaw(RemoteTab),
  },
]);

const activeTab = useRouteQuery<string>("tab", tabs.value[0].id);
</script>

<template>
  <VPageHeader :title="`安装插件`">
    <template #icon>
      <IconPlug class="mr-2 self-center" />
    </template>
  </VPageHeader>

  <div class="m-0 md:m-4">
    <VCard :body-class="['!p-0']">
      <template #header>
        <VTabbar
          v-model:active-id="activeTab"
          :items="tabs.map((item) => ({ id: item.id, label: item.label }))"
          class="w-full !rounded-none"
          type="outline"
        ></VTabbar>
      </template>
      <div class="bg-white">
        <template v-for="tab in tabs" :key="tab.id">
          <component :is="tab.component" v-if="activeTab === tab.id" />
        </template>
      </div>
    </VCard>
  </div>
</template>
