import { CodeOptions } from "@tiptap/extension-code";
import { ExtensionOptions } from "../../types";
export type ExtensionCodeOptions = Partial<CodeOptions> & ExtensionOptions;
export declare const ExtensionCode: import("@tiptap/core").Mark<
  ExtensionCodeOptions,
  any
>;
