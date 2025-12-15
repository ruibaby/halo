import { BoldOptions } from "@tiptap/extension-bold";
import { ExtensionOptions } from "../../types";
export type ExtensionBoldOptions = Partial<BoldOptions> & ExtensionOptions;
export declare const ExtensionBold: import("@tiptap/core").Mark<
  ExtensionBoldOptions,
  any
>;
