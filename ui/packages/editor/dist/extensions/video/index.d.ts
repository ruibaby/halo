import { Node } from "../../tiptap/vue-3";
import { ExtensionOptions } from "../../types";
declare module "@/tiptap" {
  interface Commands<ReturnType> {
    video: {
      setVideo: (options: { src: string }) => ReturnType;
    };
  }
}
declare const Video: Node<ExtensionOptions, any>;
export default Video;
