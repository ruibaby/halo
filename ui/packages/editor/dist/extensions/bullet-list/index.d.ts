import { BulletListOptions } from "@tiptap/extension-list";
import { ExtensionOptions } from "../../types";
export type ExtensionBulletListOptions = Partial<BulletListOptions> &
  ExtensionOptions;
export declare const ExtensionBulletList: import("@tiptap/core").Node<
  ExtensionOptions,
  any
>;
