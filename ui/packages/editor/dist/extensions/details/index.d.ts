import { DetailsOptions } from "@tiptap/extension-details";
import { PluginKey } from "../../tiptap";
import { ExtensionOptions } from "../../types";
export declare const DETAILS_BUBBLE_MENU_KEY: PluginKey<any>;
export type ExtensionDetailsOptions = Partial<DetailsOptions> &
  ExtensionOptions;
export declare const ExtensionDetails: import("@tiptap/core").Node<
  ExtensionDetailsOptions,
  any
>;
