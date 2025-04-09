import { Node } from "../../tiptap/vue-3";
import { ExtensionOptions } from "../../types";
declare module "@/tiptap" {
  interface Commands<ReturnType> {
    audio: {
      setAudio: (options: { src: string }) => ReturnType;
    };
  }
}
declare const Audio: Node<ExtensionOptions, any>;
export default Audio;
