import { ExtensionOptions } from "../../types";
import { StrikeOptions } from "@tiptap/extension-strike";
declare const Strike: import("@tiptap/core").Mark<
  ExtensionOptions & StrikeOptions,
  any
>;
export default Strike;
