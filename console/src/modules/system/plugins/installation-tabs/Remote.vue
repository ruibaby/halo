<script lang="ts" setup>
import { apiClient } from "@/utils/api-client";
import type { Plugin } from "@halo-dev/api-client";
import { Dialog, Toast, VButton } from "@halo-dev/components";
import { useQueryClient } from "@tanstack/vue-query";
import { useRouteQuery } from "@vueuse/router";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const queryClient = useQueryClient();
const { t } = useI18n();

const remoteDownloadUrl = ref("");
const downloading = ref(false);
const routeRemoteDownloadUrl = useRouteQuery<string | null>(
  "remote-download-url"
);

interface PluginInstallationErrorResponse {
  detail: string;
  instance: string;
  pluginName: string;
  requestId: string;
  status: number;
  timestamp: string;
  title: string;
  type: string;
}

const PLUGIN_ALREADY_EXISTS_TYPE =
  "https://halo.run/probs/plugin-alreay-exists";

const handleDownloadPlugin = async () => {
  try {
    downloading.value = true;

    const { data: plugin } = await apiClient.plugin.installPluginFromUri({
      installFromUriRequest: {
        uri: remoteDownloadUrl.value,
      },
    });

    queryClient.invalidateQueries({ queryKey: ["plugins"] });

    handleShowActiveModalAfterInstall(plugin);

    // eslint-disable-next-line
  } catch (error: any) {
    const data = error?.response.data as PluginInstallationErrorResponse;
    if (data?.type === PLUGIN_ALREADY_EXISTS_TYPE) {
      handleCatchExistsException(data);
    }

    console.error("Failed to download plugin", error);
  } finally {
    routeRemoteDownloadUrl.value = null;
    downloading.value = false;
  }
};

const handleCatchExistsException = async (
  error: PluginInstallationErrorResponse
) => {
  Dialog.info({
    title: t(
      "core.plugin.upload_modal.operations.existed_during_installation.title"
    ),
    description: t(
      "core.plugin.upload_modal.operations.existed_during_installation.description"
    ),
    confirmText: t("core.common.buttons.confirm"),
    cancelText: t("core.common.buttons.cancel"),
    onConfirm: async () => {
      await apiClient.plugin.upgradePluginFromUri({
        name: error.pluginName,
        upgradeFromUriRequest: {
          uri: remoteDownloadUrl.value,
        },
      });

      Toast.success(t("core.common.toast.upgrade_success"));

      window.location.reload();
    },
  });
};

const handleShowActiveModalAfterInstall = (plugin: Plugin) => {
  Dialog.success({
    title: t("core.plugin.upload_modal.operations.active_after_install.title"),
    description: t(
      "core.plugin.upload_modal.operations.active_after_install.description"
    ),
    confirmText: t("core.common.buttons.confirm"),
    cancelText: t("core.common.buttons.cancel"),
    onConfirm: async () => {
      try {
        const { data: pluginToUpdate } =
          await apiClient.extension.plugin.getpluginHaloRunV1alpha1Plugin({
            name: plugin.metadata.name,
          });
        pluginToUpdate.spec.enabled = true;

        await apiClient.extension.plugin.updatepluginHaloRunV1alpha1Plugin({
          name: pluginToUpdate.metadata.name,
          plugin: pluginToUpdate,
        });

        window.location.reload();
      } catch (e) {
        console.error(e);
      }
    },
  });
};
</script>

<template>
  <div class="px-4 py-3">
    <FormKit
      id="plugin-remote-download-form"
      name="plugin-remote-download-form"
      type="form"
      :preserve="true"
      @submit="handleDownloadPlugin"
    >
      <FormKit
        v-model="remoteDownloadUrl"
        :label="$t('core.plugin.upload_modal.tabs.remote.fields.url')"
        type="text"
      ></FormKit>
    </FormKit>

    <div class="pt-5">
      <VButton
        :loading="downloading"
        type="secondary"
        @click="$formkit.submit('plugin-remote-download-form')"
      >
        {{ $t("core.common.buttons.download") }}
      </VButton>
    </div>
  </div>
</template>
