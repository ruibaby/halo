import { Attachment } from "@halo-dev/api-client";
import { AxiosRequestConfig } from "axios";
import { Node, PluginKey } from "../../tiptap";
import { ExtensionOptions } from "../../types";
declare module "../../tiptap" {
  interface Commands<ReturnType> {
    audio: {
      setAudio: (options: { src: string }) => ReturnType;
    };
  }
}
export declare const AUDIO_BUBBLE_MENU_KEY: PluginKey<any>;
export interface ExtensionAudioOptions extends ExtensionOptions {
  uploadAudio?: (
    file: File,
    options?: AxiosRequestConfig
  ) => Promise<Attachment>;
}
export declare const ExtensionAudio: Node<ExtensionAudioOptions, any>;
