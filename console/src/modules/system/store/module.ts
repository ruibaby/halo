import BasicLayout from "@/layouts/BasicLayout.vue";
import { definePlugin } from "@halo-dev/console-shared";
import AppStore from "./AppStore.vue";
import { markRaw } from "vue";
import RiApps2Line from "~icons/ri/apps-2-line";

export default definePlugin({
  components: {},
  routes: [
    {
      path: "/store",
      component: BasicLayout,
      children: [
        {
          path: "",
          name: "AppStore",
          component: AppStore,
          meta: {
            title: "应用市场",
            permissions: ["system:settings:view"],
            menu: {
              name: "应用市场",
              group: "system",
              icon: markRaw(RiApps2Line),
              priority: 5,
            },
          },
        },
      ],
    },
  ],
});
