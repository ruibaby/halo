import { UnderlineOptions } from "@tiptap/extension-underline";
import { ExtensionOptions } from "../../types";
export type ExtensionUnderlineOptions = ExtensionOptions &
  Partial<UnderlineOptions>;
export declare const ExtensionUnderline: import("@tiptap/core").Mark<
  ExtensionUnderlineOptions,
  any
>;
