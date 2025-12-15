import { Node, PluginKey } from "../../tiptap";
import { ExtensionOptions } from "../../types";
declare module "../../tiptap" {
  interface Commands<ReturnType> {
    iframe: {
      setIframe: (options: { src: string }) => ReturnType;
    };
  }
}
export declare const IFRAME_BUBBLE_MENU_KEY: PluginKey<any>;
export declare const ExtensionIframe: Node<ExtensionOptions, any>;
