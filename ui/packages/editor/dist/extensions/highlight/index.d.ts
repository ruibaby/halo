import { ExtensionOptions } from "../../types";
import { HighlightOptions } from "@tiptap/extension-highlight";
declare const Highlight: import("@tiptap/core").Mark<
  ExtensionOptions & HighlightOptions,
  any
>;
export default Highlight;
