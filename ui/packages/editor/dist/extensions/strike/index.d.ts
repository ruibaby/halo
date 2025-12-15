import { StrikeOptions } from "@tiptap/extension-strike";
import { ExtensionOptions } from "../../types";
export type ExtensionStrikeOptions = ExtensionOptions & Partial<StrikeOptions>;
export declare const ExtensionStrike: import("@tiptap/core").Mark<
  ExtensionStrikeOptions,
  any
>;
