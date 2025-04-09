import { ExtensionOptions } from "../../types";
import { TextAlignOptions } from "@tiptap/extension-text-align";
declare const TextAlign: import("@tiptap/core").Extension<
  ExtensionOptions & TextAlignOptions,
  any
>;
export default TextAlign;
