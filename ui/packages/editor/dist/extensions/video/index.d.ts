import { Attachment } from "@halo-dev/api-client";
import { AxiosRequestConfig } from "axios";
import { Editor, Node, PluginKey } from "../../tiptap";
import { ExtensionOptions } from "../../types";
declare module "../../tiptap" {
  interface Commands<ReturnType> {
    video: {
      setVideo: (options: { src: string }) => ReturnType;
    };
  }
}
export declare const VIDEO_BUBBLE_MENU_KEY: PluginKey<any>;
export type ExtensionVideoOptions = ExtensionOptions & {
  uploadVideo?: (
    file: File,
    options?: AxiosRequestConfig
  ) => Promise<Attachment>;
};
export declare const ExtensionVideo: Node<ExtensionVideoOptions, any>;
export declare const getVideoElement: (
  editor: Editor
) => HTMLVideoElement | null;
export declare const getVideoSizePercentage: (
  editor: Editor,
  percentage: number,
  videoElement?: HTMLVideoElement | null
) =>
  | {
      width: number;
      height: number;
    }
  | undefined;
export declare const handleSetSize: (
  editor: Editor,
  size: {
    width?: string;
    height?: string;
  }
) => void;
