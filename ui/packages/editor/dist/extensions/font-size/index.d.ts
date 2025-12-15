import { FontSizeOptions } from "@tiptap/extension-text-style";
import { ExtensionOptions } from "../../types";
export type ExtensionFontSizeOptions = Partial<FontSizeOptions> &
  ExtensionOptions;
export declare const ExtensionFontSize: import("@tiptap/core").Extension<
  ExtensionFontSizeOptions,
  any
>;
