import { ExtensionOptions } from "../../types";
import { SuperscriptExtensionOptions } from "@tiptap/extension-superscript";
declare const Superscript: import("@tiptap/core").Mark<
  ExtensionOptions & SuperscriptExtensionOptions,
  any
>;
export default Superscript;
