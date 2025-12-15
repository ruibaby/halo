import { SubscriptExtensionOptions } from "@tiptap/extension-subscript";
import { ExtensionOptions } from "../../types";
export type ExtensionSubscriptOptions = Partial<SubscriptExtensionOptions> &
  ExtensionOptions;
export declare const ExtensionSubscript: import("@tiptap/core").Mark<
  ExtensionSubscriptOptions,
  any
>;
