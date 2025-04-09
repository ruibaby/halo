import { ExtensionOptions } from "../../types";
import { BlockquoteOptions } from "@tiptap/extension-blockquote";
declare const Blockquote: import("@tiptap/core").Node<
  ExtensionOptions & BlockquoteOptions,
  any
>;
export default Blockquote;
