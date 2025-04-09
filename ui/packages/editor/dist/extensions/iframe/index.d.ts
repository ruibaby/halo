import { Node } from "../../tiptap/vue-3";
import { ExtensionOptions } from "../../types";
declare module "@/tiptap" {
  interface Commands<ReturnType> {
    iframe: {
      setIframe: (options: { src: string }) => ReturnType;
    };
  }
}
declare const Iframe: Node<ExtensionOptions, any>;
export default Iframe;
