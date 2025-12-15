import { TextAlignOptions } from "@tiptap/extension-text-align";
import { ExtensionOptions } from "../../types";
export type ExtensionTextAlignOptions = ExtensionOptions &
  Partial<TextAlignOptions>;
export declare const ExtensionTextAlign: import("@tiptap/core").Extension<
  ExtensionTextAlignOptions,
  any
>;
