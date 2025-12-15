import { ColorOptions } from "@tiptap/extension-color";
import { ExtensionOptions } from "../../types";
export type ExtensionColorOptions = Partial<ColorOptions> & ExtensionOptions;
export declare const ExtensionColor: import("@tiptap/core").Extension<
  ExtensionColorOptions,
  any
>;
