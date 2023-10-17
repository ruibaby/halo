<script lang="ts" setup>
import DefaultEditor from "@/components/editor/DefaultEditor.vue";
import {
  VPageHeader,
  VCard,
  IconAddCircle,
  VAvatar,
} from "@halo-dev/components";
import { useRouteQuery } from "@vueuse/router";
import { BaseTree } from "@he-tree/vue";
import "@he-tree/vue/style/default.css";
import RiFile3Line from "~icons/ri/file-3-line";
import RiFolder2Line from "~icons/ri/folder-2-line";
import RiArrowDownSLine from "~icons/ri/arrow-down-s-line";
import RiArrowRightSLine from "~icons/ri/arrow-right-s-line";

const version = useRouteQuery("version", "");
</script>

<template>
  <VPageHeader title="Halo 文档">
    <template #icon>
      <VAvatar src="https://www.halo.run/logo" class="mr-2" size="sm" />
    </template>
  </VPageHeader>

  <div class="m-0 rounded-base bg-white md:m-4">
    <VCard
      style="height: calc(100vh - 5.5rem)"
      :body-class="['h-full', '!p-0']"
    >
      <div class="grid h-full grid-cols-12 divide-y sm:divide-x sm:divide-y-0">
        <div
          class="relative col-span-12 h-full overflow-auto p-2 sm:col-span-6 lg:col-span-5 xl:col-span-2"
        >
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

          <BaseTree
            :model-value="[
              {
                text: 'Projects',
                children: [
                  {
                    text: 'Frontend',
                    children: [
                      {
                        text: 'Vue',
                        children: [
                          {
                            text: 'Nuxt',
                          },
                        ],
                      },
                      {
                        text: 'React',
                        children: [
                          {
                            text: 'Next',
                          },
                        ],
                      },
                      {
                        text: 'Angular',
                      },
                    ],
                  },
                  {
                    text: 'Backend',
                  },
                ],
              },
              {
                text: 'Videos',
                children: [
                  {
                    text: 'Movie',
                    children: [
                      {
                        text: 'The Godfather',
                      },
                      {
                        text: 'La Dolce Vita',
                      },
                      {
                        text: 'In the Mood for Love',
                      },
                    ],
                  },
                  {
                    text: 'AD',
                  },
                  {
                    text: 'Shorts',
                  },
                ],
              },
              {
                text: 'Photos',
                children: [
                  {
                    text: 'Animals',
                  },
                  {
                    text: 'Buildings',
                  },
                  {
                    text: 'Sky',
                  },
                  {
                    text: 'Sea',
                  },
                ],
              },
              {
                text: 'Music',
                children: [
                  {
                    text: 'My Happy Melodies.',
                  },
                  {
                    text: 'Hello Summer.',
                  },
                  {
                    text: 'An Overture To Happiness.',
                  },
                  {
                    text: 'Sunny Days.',
                  },
                  {
                    text: 'Every One Need Adventure.',
                  },
                  {
                    text: 'Happy, Chill Radio.',
                  },
                  {
                    text: 'I Found My Way.',
                  },
                  {
                    text: 'Early, Early Morning.',
                  },
                ],
              },
              {
                text: 'Games',
                children: [
                  {
                    text: 'swimming',
                  },
                  {
                    text: 'cycling',
                  },
                  {
                    text: 'tennis',
                  },
                  {
                    text: 'boxing',
                  },
                ],
              },
              {
                text: 'Download',
              },
            ]"
            virtualization
            class="mt-2"
          >
            <template #default="{ node, stat }">
              <div
                class="flex w-full items-center justify-between gap-2 rounded-base p-1 hover:bg-gray-100"
                @click="stat.children.length && (stat.open = !stat.open)"
              >
                <div class="inline-flex items-center gap-2">
                  <RiFolder2Line v-if="stat.children.length" class="h-4 w-4" />
                  <RiFile3Line v-else class="h-4 w-4" />
                  <span class="line-clamp-1 text-sm">
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
          class="col-span-12 sm:col-span-6 lg:col-span-7 xl:col-span-10"
          style="height: calc(100vh - 5.5rem)"
        >
          <DefaultEditor class="h-full" />
        </div>
      </div>
    </VCard>
  </div>
</template>
