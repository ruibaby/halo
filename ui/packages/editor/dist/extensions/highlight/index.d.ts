import { HighlightOptions } from "@tiptap/extension-highlight";
import { ExtensionOptions } from "../../types";
export type ExtensionHighlightOptions = ExtensionOptions &
  Partial<HighlightOptions>;
export declare const ExtensionHighlight: import("@tiptap/core").Mark<
  ExtensionHighlightOptions,
  any
>;
