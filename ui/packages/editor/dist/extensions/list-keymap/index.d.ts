import { ListKeymapOptions } from "@tiptap/extension-list-keymap";
/**
 *  Optimize the listKeymap extension until the issue with @tiptap/extension-list-keymap is resolved.
 *  https://github.com/ueberdosis/tiptap/issues/4395
 */
declare const ExtensionListKeymap: import("@tiptap/core").Extension<
  ListKeymapOptions,
  any
>;
export default ExtensionListKeymap;
