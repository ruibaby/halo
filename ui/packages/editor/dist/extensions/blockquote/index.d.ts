import { BlockquoteOptions } from "@tiptap/extension-blockquote";
import { ExtensionOptions } from "../../types";
export type ExtensionBlockquoteOptions = Partial<BlockquoteOptions> &
  ExtensionOptions;
export declare const ExtensionBlockquote: import("@tiptap/core").Node<
  ExtensionBlockquoteOptions,
  any
>;
