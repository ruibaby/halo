import { LinkOptions } from "@tiptap/extension-link";
import { ExtensionOptions } from "../../types";
export type ExtensionLinkOptions = ExtensionOptions & Partial<LinkOptions>;
export declare const ExtensionLink: import("@tiptap/core").Mark<
  ExtensionLinkOptions,
  any
>;
