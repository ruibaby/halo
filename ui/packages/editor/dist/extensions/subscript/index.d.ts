import { ExtensionOptions } from "../../types";
import { SubscriptExtensionOptions } from "@tiptap/extension-subscript";
declare const Subscript: import("@tiptap/core").Mark<
  ExtensionOptions & SubscriptExtensionOptions,
  any
>;
export default Subscript;
