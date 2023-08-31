import type { Component, Ref } from "vue";
import type { RouteRecordRaw, RouteRecordName } from "vue-router";
import type { FunctionalPage } from "../states/pages";
import type { AttachmentSelectProvider } from "../states/attachment-selector";
import type { EditorProvider, PluginTab } from "..";
import type { AnyExtension } from "@tiptap/vue-3";
import type { CommentSubjectRefProvider } from "@/states/comment-subject-ref";
import type { BackupTab } from "@/states/backup";
import type { PluginInstallationTab } from "@/states/plugin-installation-tabs";
import type { EntityDropdownItem, EntityFieldItem } from "@/states/entity";
import type { ThemeListTab } from "@/states/theme-list-tabs";
import type { Backup, ListedPost, Plugin, Theme } from "@halo-dev/api-client";

export interface RouteRecordAppend {
  parentName: RouteRecordName;
  route: RouteRecordRaw;
}

export interface ExtensionPoint {
  // @deprecated
  "page:functional:create"?: () => FunctionalPage[] | Promise<FunctionalPage[]>;

  "attachment:selector:create"?: () =>
    | AttachmentSelectProvider[]
    | Promise<AttachmentSelectProvider[]>;

  "editor:create"?: () => EditorProvider[] | Promise<EditorProvider[]>;

  "plugin:self:tabs:create"?: () => PluginTab[] | Promise<PluginTab[]>;

  "default:editor:extension:create"?: () =>
    | AnyExtension[]
    | Promise<AnyExtension[]>;

  "comment:subject-ref:create"?: () => CommentSubjectRefProvider[];

  "backup:tabs:create"?: () => BackupTab[] | Promise<BackupTab[]>;

  "plugin:installation:tabs:create"?: () =>
    | PluginInstallationTab[]
    | Promise<PluginInstallationTab[]>;

  "post:list-item:operation:create"?: (
    post: Ref<ListedPost>
  ) =>
    | EntityDropdownItem<ListedPost>[]
    | Promise<EntityDropdownItem<ListedPost>[]>;

  "plugin:list-item:operation:create"?: (
    plugin: Ref<Plugin>
  ) => EntityDropdownItem<Plugin>[] | Promise<EntityDropdownItem<Plugin>[]>;

  "backup:list-item:operation:create"?: (
    backup: Ref<Backup>
  ) => EntityDropdownItem<Backup>[] | Promise<EntityDropdownItem<Backup>[]>;

  "plugin:list-item:field:create"?: (
    plugin: Ref<Plugin>
  ) => EntityFieldItem[] | Promise<EntityFieldItem[]>;

  "theme:list:tabs:create"?: () => ThemeListTab[] | Promise<ThemeListTab[]>;

  "theme:list-item:operation:create"?: (
    theme: Ref<Theme>
  ) => EntityDropdownItem<Theme>[] | Promise<EntityDropdownItem<Theme>[]>;
}

export interface PluginModule {
  /**
   * These components will be registered when plugin is activated.
   */
  components?: Record<string, Component>;

  /**
   * Activate hook will be called when plugin is activated.
   */
  activated?: () => void;

  /**
   * Deactivate hook will be called when plugin is deactivated.
   */
  deactivated?: () => void;

  routes?: RouteRecordRaw[] | RouteRecordAppend[];

  extensionPoints?: ExtensionPoint;
}
