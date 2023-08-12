import { definePlugin } from "@halo-dev/console-shared";
import BasicLayout from "@/layouts/BasicLayout.vue";
import BlankLayout from "@/layouts/BlankLayout.vue";
import UserProfileLayout from "./layouts/UserProfileLayout.vue";
import UserStatsWidget from "./widgets/UserStatsWidget.vue";
import UserList from "./UserList.vue";
import UserDetail from "./UserDetail.vue";
import UserProfileDetail from "./UserProfileDetail.vue";
import PersonalAccessTokens from "./PersonalAccessTokens.vue";
import Login from "./Login.vue";
import { IconUserSettings } from "@halo-dev/components";
import { markRaw } from "vue";
import Binding from "./Binding.vue";
import UserCenterProfileLayout from "./layouts/UserCenterProfileLayout.vue";

export default definePlugin({
  components: {
    UserStatsWidget,
  },
  uc: {
    routes: [
      {
        path: "profile",
        component: UserCenterProfileLayout,
        children: [
          {
            path: "",
            name: "UserProfile",
            component: UserProfileDetail,
            meta: {
              title: "我的资料",
              umenu: {
                name: "资料",
                group: "我的",
                icon: markRaw(IconUserSettings),
                priority: 0,
                mobile: true,
              },
            },
          },
        ],
      },
    ],
  },
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        title: "core.login.title",
      },
    },
    {
      path: "/binding/:provider",
      name: "Binding",
      component: Binding,
      meta: {
        title: "core.binding.title",
      },
    },
    {
      path: "/users",
      component: BlankLayout,
      children: [
        {
          path: "",
          component: BasicLayout,
          children: [
            {
              path: "",
              name: "Users",
              component: UserList,
              meta: {
                title: "core.user.title",
                searchable: true,
                permissions: ["system:users:view"],
                menu: {
                  name: "core.sidebar.menu.items.users",
                  group: "system",
                  icon: markRaw(IconUserSettings),
                  priority: 1,
                  mobile: true,
                },
              },
            },
          ],
        },
        {
          path: ":name",
          component: UserProfileLayout,
          name: "User",
          children: [
            {
              path: "detail",
              name: "UserDetail",
              component: UserDetail,
              meta: {
                title: "core.user.detail.title",
              },
            },
            {
              path: "tokens",
              name: "PersonalAccessTokens",
              component: PersonalAccessTokens,
              meta: {
                title: "个人令牌",
              },
            },
          ],
        },
      ],
    },
  ],
});
