import { Node } from "../../tiptap";
import { PluginKey } from "../../tiptap/pm";
import { ExtensionOptions } from "../../types";
declare module "../../tiptap" {
  interface Commands<ReturnType> {
    columns: {
      insertColumns: (attrs?: { cols: number }) => ReturnType;
      addColBefore: () => ReturnType;
      addColAfter: () => ReturnType;
      deleteCol: () => ReturnType;
    };
  }
}
export declare const COLUMNS_BUBBLE_MENU_KEY: PluginKey<any>;
export interface ExtensionColumnsOptions extends ExtensionOptions {
  HTMLAttributes: {
    class: string;
  };
}
export declare const ExtensionColumns: Node<ExtensionColumnsOptions, any>;
