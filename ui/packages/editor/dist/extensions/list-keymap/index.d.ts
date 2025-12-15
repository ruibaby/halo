import { ListKeymapOptions } from "@tiptap/extension-list";
export type ExtensionListKeymapOptions = Partial<ListKeymapOptions>;
/**
 *  Optimize the listKeymap extension until the issue with @tiptap/extension-list is resolved.
 *  https://github.com/ueberdosis/tiptap/issues/4395
 */
export declare const ExtensionListKeymap: import("@tiptap/core").Extension<
  Partial<ListKeymapOptions>,
  any
>;
