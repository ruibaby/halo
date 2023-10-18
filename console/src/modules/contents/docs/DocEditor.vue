<script lang="ts" setup>
import DefaultEditor from "@/components/editor/DefaultEditor.vue";
import {
  VPageHeader,
  VCard,
  IconAddCircle,
  VAvatar,
  VButton,
  IconSettings,
} from "@halo-dev/components";
import { useRouteQuery } from "@vueuse/router";
import { BaseTree } from "@he-tree/vue";
import "@he-tree/vue/style/default.css";
import RiFile3Line from "~icons/ri/file-3-line";
import RiFolder2Line from "~icons/ri/folder-2-line";
import RiArrowDownSLine from "~icons/ri/arrow-down-s-line";
import RiArrowRightSLine from "~icons/ri/arrow-right-s-line";
import RiFileAddLine from "~icons/ri/file-add-line";
import RiFolderAddLine from "~icons/ri/folder-add-line";

const version = useRouteQuery("version", "");
</script>

<template>
  <VPageHeader title="Halo 文档">
    <template #icon>
      <VAvatar src="https://www.halo.run/logo" class="mr-2" size="sm" />
    </template>
    <template #actions>
      <VButton type="secondary">
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
                    { label: '最新', value: '' },
                    { label: '2.10.0', value: '2.10.0' },
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

          <BaseTree
            :model-value="[
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
            ]"
            virtualization
            class="mt-2"
          >
            <template #default="{ node, stat }">
              <div
                class="flex w-full cursor-pointer items-center justify-between gap-2 rounded-base p-1 hover:bg-gray-100"
                @click="stat.children.length && (stat.open = !stat.open)"
              >
                <div class="inline-flex items-center gap-2">
                  <RiFolder2Line v-if="stat.children.length" class="h-4 w-4" />
                  <RiFile3Line v-else class="h-4 w-4" />
                  <span class="line-clamp-1 flex-1 select-none text-sm">
                    {{ node.text }}
                  </span>
                </div>

                <div v-if="stat.children.length">
                  <RiArrowRightSLine v-if="!stat.open" class="h-4 w-4" />
                  <RiArrowDownSLine v-else class="h-4 w-4" />
                </div>
              </div>
            </template>
          </BaseTree>
        </div>

        <div
          class="col-span-12 sm:col-span-6 lg:col-span-7 xl:col-span-9"
          style="height: calc(100vh - 5.5rem)"
        >
          <DefaultEditor class="h-full" />
        </div>
      </div>
    </VCard>
  </div>
</template>
