import { TableOptions } from "@tiptap/extension-table";
import { PluginKey } from "../../tiptap/pm";
import { ExtensionOptions } from "../../types";
export declare const TABLE_BUBBLE_MENU_KEY: PluginKey<any>;
export type ExtensionTableOptions = ExtensionOptions & Partial<TableOptions>;
export declare const ExtensionTable: import("@tiptap/core").Node<
  ExtensionTableOptions,
  any
>;
