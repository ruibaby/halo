<script lang="ts" setup>
import DefaultEditor from "@/components/editor/DefaultEditor.vue";
import {
  VPageHeader,
  VCard,
  IconAddCircle,
  VAvatar,
  VButton,
  IconSettings,
  IconMore,
  VDropdown,
  VDropdownItem,
  VStatusDot,
  VSpace,
} from "@halo-dev/components";
import { useRouteQuery } from "@vueuse/router";
import { Draggable } from "@he-tree/vue";
import "@he-tree/vue/style/default.css";
import RiFile3Line from "~icons/ri/file-3-line";
import RiFolder2Line from "~icons/ri/folder-2-line";
import RiArrowDownSLine from "~icons/ri/arrow-down-s-line";
import RiArrowRightSLine from "~icons/ri/arrow-right-s-line";
import RiFileAddLine from "~icons/ri/file-add-line";
import RiFolderAddLine from "~icons/ri/folder-add-line";
import ContextMenu from "@imengyu/vue3-context-menu";
import "@imengyu/vue3-context-menu/lib/vue3-context-menu.css";
import { ref } from "vue";
import FolderPropertiesModal from "./components/FolderPropertiesModal.vue";
import DocSettingModal from "./components/DocSettingModal.vue";

const version = useRouteQuery("version", "");

const propertiesModal = ref(false);
const docSettingModal = ref(false);

function onContextMenu(e: MouseEvent) {
  //prevent the browser's default menu
  e.preventDefault();
  //show our menu
  ContextMenu.showContextMenu({
    x: e.x,
    y: e.y,
    theme: "mac",
    items: [
      {
        label: "属性设置",
        preserveIconWidth: false,
        onClick: () => {
          propertiesModal.value = true;
        },
      },
      {
        label: "重命名",
        preserveIconWidth: false,
        onClick: () => {
          alert("重命名");
        },
      },
      {
        label: "删除",
        preserveIconWidth: false,
        onClick: () => {
          alert("删除");
        },
      },
    ],
  });
}
</script>

<template>
  <VPageHeader title="Halo 文档">
    <template #icon>
      <VAvatar src="https://www.halo.run/logo" class="mr-2" size="sm" />
    </template>
    <template #actions>
      <VButton @click="docSettingModal = true">
        <template #icon>
          <IconSettings class="h-full w-full" />
        </template>
        设置
      </VButton>
    </template>
  </VPageHeader>

  <div class="m-0 rounded-base bg-white md:m-4">
    <VCard
      style="height: calc(100vh - 5.5rem)"
      :body-class="['h-full', '!p-0']"
    >
      <div class="grid h-full grid-cols-12 divide-y sm:divide-x sm:divide-y-0">
        <div
          class="relative col-span-12 h-full resize-x overflow-auto p-2 sm:col-span-6 lg:col-span-5 xl:col-span-3"
        >
          <div class="flex items-center gap-5">
            <div class="flex-1">
              <FormKit type="form">
                <FormKit
                  v-model="version"
                  type="select"
                  :options="[
                    { label: '2.10.0（最新）', value: '2.10.0' },
                    { label: '2.9.0', value: '2.9.0' },
                  ]"
                >
                  <template #suffix>
                    <div
                      v-tooltip="'创建版本'"
                      class="group flex h-full cursor-pointer items-center border-l px-3 transition-all hover:bg-gray-100"
                    >
                      <IconAddCircle
                        class="h-4 w-4 text-gray-500 group-hover:text-gray-700"
                      />
                    </div>
                    <VDropdown class="h-full">
                      <div
                        v-tooltip="'更多'"
                        class="group flex h-full cursor-pointer items-center border-l px-3 transition-all hover:bg-gray-100"
                      >
                        <IconMore
                          class="h-4 w-4 text-gray-500 group-hover:text-gray-700"
                        />
                      </div>
                      <template #popper>
                        <VDropdownItem>设置为默认版本</VDropdownItem>
                        <VDropdownItem type="danger">删除</VDropdownItem>
                      </template>
                    </VDropdown>
                  </template>
                </FormKit>
              </FormKit>
            </div>
            <div class="inline-flex items-center gap-2">
              <div
                v-tooltip="'添加文件夹'"
                class="cursor-pointer rounded-full p-2 transition-all hover:bg-gray-100"
              >
                <RiFolderAddLine class="text-lg text-gray-600" />
              </div>
              <div
                v-tooltip="'添加文档'"
                class="cursor-pointer rounded-full p-2 transition-all hover:bg-gray-100"
              >
                <RiFileAddLine class="text-md text-gray-600" />
              </div>
            </div>
          </div>

          <Draggable
            :model-value="[
              {
                text: 'zh',
                children: [
                  {
                    text: '简介',
                  },
                  {
                    text: '入门',
                    children: [
                      {
                        text: '写在前面',
                      },
                      {
                        text: '安装指南',
                        children: [
                          {
                            text: '使用 Docker Compose 部署',
                          },
                          {
                            text: '使用 Docker 部署',
                          },
                          {
                            text: '使用 1Panel 部署',
                          },
                          {
                            text: '使用 Helm 部署',
                          },
                          {
                            text: '使用 Podman 部署',
                          },
                          {
                            text: '其他指南',
                            children: [
                              {
                                text: '与 OneinStack 配合使用',
                              },
                              {
                                text: '与 Nginx Proxy Manager 配合使用',
                              },
                              {
                                text: '与 Traefik 配合使用',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        text: '从 Halo 1.x 迁移',
                      },
                      {
                        text: '第一篇文章',
                      },
                    ],
                  },
                ],
              },
              {
                text: 'en',
                children: [
                  {
                    text: '简介',
                  },
                  {
                    text: '入门',
                    children: [
                      {
                        text: '写在前面',
                      },
                      {
                        text: '安装指南',
                        children: [
                          {
                            text: '使用 Docker Compose 部署',
                          },
                          {
                            text: '使用 Docker 部署',
                          },
                          {
                            text: '使用 1Panel 部署',
                          },
                          {
                            text: '使用 Helm 部署',
                          },
                          {
                            text: '使用 Podman 部署',
                          },
                          {
                            text: '其他指南',
                            children: [
                              {
                                text: '与 OneinStack 配合使用',
                              },
                              {
                                text: '与 Nginx Proxy Manager 配合使用',
                              },
                              {
                                text: '与 Traefik 配合使用',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        text: '从 Halo 1.x 迁移',
                      },
                      {
                        text: '第一篇文章',
                      },
                    ],
                  },
                ],
              },
            ]"
            virtualization
            class="mt-2"
          >
            <template #default="{ node, stat }">
              <div
                class="group flex w-full cursor-pointer items-center justify-between gap-2 rounded-base p-1 hover:bg-gray-100"
                @click="stat.children.length && (stat.open = !stat.open)"
                @contextmenu="onContextMenu($event)"
              >
                <div class="inline-flex items-center gap-2">
                  <RiFolder2Line v-if="stat.children.length" class="h-4 w-4" />
                  <RiFile3Line v-else class="h-4 w-4" />
                  <span class="line-clamp-1 flex-1 select-none text-sm">
                    {{ node.text }}
                  </span>
                  <VStatusDot
                    v-if="stat.level === 4 && !stat.children.length"
                    v-tooltip="'未发布'"
                    state="warning"
                    animate
                  />
                </div>

                <div v-if="stat.children.length" class="inline-flex gap-2">
                  <IconAddCircle class="hidden h-4 w-4 group-hover:block" />
                  <RiArrowRightSLine v-if="!stat.open" class="h-4 w-4" />
                  <RiArrowDownSLine v-else class="h-4 w-4" />
                </div>
              </div>
            </template>
          </Draggable>
        </div>

        <div
          class="col-span-12 sm:col-span-6 lg:col-span-7 xl:col-span-9"
          style="height: calc(100vh - 8.5rem)"
        >
          <div class="flex h-12 items-center justify-end border-b px-2">
            <VSpace>
              <VButton type="default">保存</VButton>
              <VButton type="secondary">发布</VButton>
            </VSpace>
          </div>
          <DefaultEditor class="h-full" />
        </div>
      </div>
    </VCard>
  </div>
  <FolderPropertiesModal
    v-model="propertiesModal"
    @close="propertiesModal = false"
  />
  <DocSettingModal v-model="docSettingModal" @close="docSettingModal = false" />
</template>
