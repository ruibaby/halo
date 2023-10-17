import BasicLayout from "@/layouts/BasicLayout.vue";
import { definePlugin } from "@halo-dev/console-shared";
import Docs from "./Docs.vue";
import { markRaw } from "vue";
import RiBook2Line from "~icons/ri/book-2-line";
import DocEditor from "./DocEditor.vue";

export default definePlugin({
  routes: [
    {
      path: "/docs",
      component: BasicLayout,
      children: [
        {
          path: "",
          name: "Docs",
          component: Docs,
          meta: {
            title: "文档",
            searchable: true,
            permissions: [],
            menu: {
              name: "文档",
              group: "content",
              icon: markRaw(RiBook2Line),
              priority: 4,
              mobile: false,
            },
          },
        },
        {
          path: ":name",
          name: "Doc",
          component: DocEditor,
          meta: {
            title: "文档编辑",
            searchable: true,
            permissions: [],
          },
        },
      ],
    },
  ],
});
