import { ItalicOptions } from "@tiptap/extension-italic";
import { ExtensionOptions } from "../../types";
export type ExtensionItalicOptions = ExtensionOptions & Partial<ItalicOptions>;
export declare const ExtensionItalic: import("@tiptap/core").Mark<
  ExtensionItalicOptions,
  any
>;
