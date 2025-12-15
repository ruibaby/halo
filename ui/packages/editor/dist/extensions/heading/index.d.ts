import { HeadingOptions } from "@tiptap/extension-heading";
import { ExtensionOptions } from "../../types";
export type ExtensionHeadingOptions = ExtensionOptions & HeadingOptions;
export declare const ExtensionHeading: import("@tiptap/core").Node<
  ExtensionHeadingOptions,
  any
>;
