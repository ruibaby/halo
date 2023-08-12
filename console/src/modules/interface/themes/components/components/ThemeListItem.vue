<script lang="ts" setup>
import {
  VTag,
  VStatusDot,
  Dialog,
  Toast,
  VDropdownItem,
  VDropdown,
  VDropdownDivider,
  VButton,
  VSpace,
  IconMore,
  IconArrowUpCircleLine,
} from "@halo-dev/components";
import type { Theme } from "@halo-dev/api-client";
import { apiClient } from "@/utils/api-client";
import { toRefs } from "vue";
import { useThemeLifeCycle } from "../../composables/use-theme";
import { usePermission } from "@/utils/permission";
import { useI18n } from "vue-i18n";

const { currentUserHasPermission } = usePermission();
const { t } = useI18n();

const props = withDefaults(
  defineProps<{
    theme: Theme;
    isSelected?: boolean;
  }>(),
  {
    isSelected: false,
  }
);

const emit = defineEmits<{
  (event: "reload"): void;
  (event: "upgrade"): void;
  (event: "preview"): void;
  (event: "select", theme: Theme): void;
}>();

const { theme } = toRefs(props);

const {
  isActivated,
  getFailedMessage,
  handleActiveTheme,
  handleResetSettingConfig,
} = useThemeLifeCycle(theme);

const handleUninstall = async (theme: Theme, deleteExtensions?: boolean) => {
  Dialog.warning({
    title: `${
      deleteExtensions
        ? t("core.theme.operations.uninstall_and_delete_config.title")
        : t("core.theme.operations.uninstall.title")
    }`,
    description: t("core.common.dialog.descriptions.cannot_be_recovered"),
    confirmText: t("core.common.buttons.confirm"),
    cancelText: t("core.common.buttons.cancel"),
    onConfirm: async () => {
      try {
        await apiClient.extension.theme.deletethemeHaloRunV1alpha1Theme({
          name: theme.metadata.name,
        });

        // delete theme setting and configMap
        if (deleteExtensions) {
          const { settingName, configMapName } = theme.spec;

          if (settingName) {
            await apiClient.extension.setting.deletev1alpha1Setting(
              {
                name: settingName,
              },
              {
                mute: true,
              }
            );
          }

          if (configMapName) {
            await apiClient.extension.configMap.deletev1alpha1ConfigMap(
              {
                name: configMapName,
              },
              {
                mute: true,
              }
            );
          }
        }

        Toast.success(t("core.common.toast.uninstall_success"));
      } catch (e) {
        console.error("Failed to uninstall theme", e);
      } finally {
        emit("reload");
      }
    },
  });
};
</script>

<template>
  <div
    class="group relative flex grid-cols-1 flex-col overflow-hidden rounded bg-white p-2 shadow-sm transition-all duration-500 hover:shadow-md hover:ring-1 sm:grid sm:grid-cols-7"
    :class="{ 'ring-1': isSelected }"
  >
    <div class="col-span-2">
      <div class="relative block">
        <div v-if="false" class="aspect-h-9 aspect-w-16">
          <img
            class="pointer-events-none transform-gpu rounded object-cover"
            loading="lazy"
          />
        </div>
        <div v-else class="aspect-h-9 aspect-w-16">
          <div
            class="transform-gpu rounded bg-cover bg-center bg-no-repeat"
            :style="{
              backgroundImage: `url('${theme.spec.logo}')`,
            }"
          >
            <div
              class="flex h-full w-full items-center justify-center rounded backdrop-blur-3xl"
            >
              <img class="h-16 w-16 rounded" :src="theme.spec.logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative col-span-5 grid grid-cols-1 content-between px-0 py-1 sm:px-4"
    >
      <div>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="inline-flex items-center gap-2">
            <div
              class="relative block cursor-pointer text-base font-medium text-black transition-all hover:text-gray-600 hover:underline"
              @click="emit('select', theme)"
            >
              {{ theme.spec.displayName }}
            </div>
            <span class="text-sm text-gray-500">
              {{ theme.spec.version }}
            </span>
            <VTag v-if="isActivated" theme="primary">
              {{ $t("core.common.status.activated") }}
            </VTag>
          </div>
          <div>
            <div
              v-if="isSelected"
              class="group/upgrade inline-flex cursor-pointer items-center gap-1"
            >
              <IconArrowUpCircleLine
                class="h-4 w-4 animate-pulse text-primary"
              />
              <span
                class="text-xs text-gray-500 group-hover/upgrade:text-gray-900"
              >
                新版本
              </span>
            </div>
            <VStatusDot
              v-if="getFailedMessage()"
              v-tooltip="getFailedMessage()"
              state="warning"
              animate
            />
            <VStatusDot
              v-if="theme.metadata.deletionTimestamp"
              v-tooltip="$t('core.common.status.deleting')"
              state="warning"
              animate
            />
          </div>
        </div>
        <p class="mt-2 line-clamp-6 text-sm font-normal text-gray-500">
          {{ theme.spec.description }}
        </p>
      </div>
      <div
        class="mt-4 flex w-full flex-1 items-center justify-between gap-2 sm:mt-0"
      >
        <div v-if="theme.spec.author" class="inline-flex items-center gap-1.5">
          <a
            v-if="theme.spec.author.website"
            class="text-xs text-gray-700 hover:text-gray-900"
            :href="theme.spec.author.website"
            target="_blank"
          >
            {{ theme.spec.author.name }}
          </a>
          <span v-else class="text-xs text-gray-700">
            {{ theme.spec.author.name }}
          </span>
        </div>

        <div>
          <VSpace>
            <VButton size="sm" type="default" @click="emit('select', theme)">
              选择
            </VButton>
            <VDropdown
              v-if="currentUserHasPermission(['system:themes:manage'])"
            >
              <VButton size="sm">
                <IconMore />
              </VButton>
              <template #popper>
                <VDropdownItem
                  v-if="!isActivated"
                  @click="handleActiveTheme(true)"
                >
                  {{ $t("core.common.buttons.active") }}
                </VDropdownItem>
                <VDropdownItem @click="emit('upgrade')">
                  {{ $t("core.common.buttons.upgrade") }}
                </VDropdownItem>
                <VDropdownItem @click="emit('preview')">
                  {{ $t("core.common.buttons.preview") }}
                </VDropdownItem>
                <VDropdownDivider />
                <VDropdown placement="right" :triggers="['click']">
                  <VDropdownItem type="danger">
                    {{ $t("core.common.buttons.uninstall") }}
                  </VDropdownItem>
                  <template #popper>
                    <VDropdownItem
                      type="danger"
                      @click="handleUninstall(theme)"
                    >
                      {{ $t("core.common.buttons.uninstall") }}
                    </VDropdownItem>
                    <VDropdownItem
                      type="danger"
                      @click="handleUninstall(theme, true)"
                    >
                      {{
                        $t(
                          "core.theme.operations.uninstall_and_delete_config.button"
                        )
                      }}
                    </VDropdownItem>
                  </template>
                </VDropdown>
                <VDropdownItem type="danger" @click="handleResetSettingConfig">
                  {{ $t("core.common.buttons.reset") }}
                </VDropdownItem>
              </template>
            </VDropdown>
          </VSpace>
        </div>
      </div>
    </div>
  </div>
  <!-- <VEntity :is-selected="isSelected">
    <template #start>
      <VEntityField>
        <template #description>
          <div class="w-32">
            <div
              class="group aspect-h-3 aspect-w-4 block w-full overflow-hidden rounded border bg-gray-100"
            >
              <LazyImage
                :key="theme.metadata.name"
                :src="theme.spec.logo"
                :alt="theme.spec.displayName"
                classes="pointer-events-none object-cover group-hover:opacity-75"
              >
                <template #loading>
                  <div
                    class="flex h-full items-center justify-center object-cover"
                  >
                    <span class="text-xs text-gray-400">
                      {{ $t("core.common.status.loading") }}...
                    </span>
                  </div>
                </template>
                <template #error>
                  <div
                    class="flex h-full items-center justify-center object-cover"
                  >
                    <span class="text-xs text-red-400">
                      {{ $t("core.common.status.loading_error") }}
                    </span>
                  </div>
                </template>
              </LazyImage>
            </div>
          </div>
        </template>
      </VEntityField>
      <VEntityField
        :title="theme.spec.displayName"
        :description="theme.spec.version"
      >
        <template #extra>
          <VTag v-if="isActivated">
            {{ $t("core.common.status.activated") }}
          </VTag>
        </template>
      </VEntityField>
    </template>
    <template #end>
      <VEntityField v-if="getFailedMessage()">
        <template #description>
          <VStatusDot v-tooltip="getFailedMessage()" state="warning" animate />
        </template>
      </VEntityField>
      <VEntityField v-if="theme.metadata.deletionTimestamp">
        <template #description>
          <VStatusDot
            v-tooltip="$t('core.common.status.deleting')"
            state="warning"
            animate
          />
        </template>
      </VEntityField>
      <VEntityField>
        <template #description>
          <a
            class="text-sm text-gray-400 hover:text-blue-600"
            :href="theme.spec.author.website"
            target="_blank"
            @click.stop
          >
            {{ theme.spec.author.name }}
          </a>
        </template>
      </VEntityField>
      <VEntityField>
        <template #description>
          <a
            :href="theme.spec.repo"
            class="text-gray-900 hover:text-blue-600"
            target="_blank"
          >
            <IconGitHub />
          </a>
        </template>
      </VEntityField>
    </template>
    <template
      v-if="currentUserHasPermission(['system:themes:manage'])"
      #dropdownItems
    >
      <VDropdownItem v-if="!isActivated" @click="handleActiveTheme(true)">
        {{ $t("core.common.buttons.active") }}
      </VDropdownItem>
      <VDropdownItem @click="emit('upgrade')">
        {{ $t("core.common.buttons.upgrade") }}
      </VDropdownItem>
      <VDropdownItem @click="emit('preview')">
        {{ $t("core.common.buttons.preview") }}
      </VDropdownItem>
      <VDropdownDivider />
      <VDropdown placement="right" :triggers="['click']">
        <VDropdownItem type="danger">
          {{ $t("core.common.buttons.uninstall") }}
        </VDropdownItem>
        <template #popper>
          <VDropdownItem type="danger" @click="handleUninstall(theme)">
            {{ $t("core.common.buttons.uninstall") }}
          </VDropdownItem>
          <VDropdownItem type="danger" @click="handleUninstall(theme, true)">
            {{ $t("core.theme.operations.uninstall_and_delete_config.button") }}
          </VDropdownItem>
        </template>
      </VDropdown>
      <VDropdownItem type="danger" @click="handleResetSettingConfig">
        {{ $t("core.common.buttons.reset") }}
      </VDropdownItem>
    </template>
  </VEntity> -->
</template>
