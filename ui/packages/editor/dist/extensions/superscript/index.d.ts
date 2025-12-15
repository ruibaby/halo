import { SuperscriptExtensionOptions } from "@tiptap/extension-superscript";
import { ExtensionOptions } from "../../types";
export type ExtensionSuperscriptOptions = Partial<SuperscriptExtensionOptions> &
  ExtensionOptions;
export declare const ExtensionSuperscript: import("@tiptap/core").Mark<
  ExtensionSuperscriptOptions,
  any
>;
