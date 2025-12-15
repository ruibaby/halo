import { Attachment } from "@halo-dev/api-client";
import { ImageOptions } from "@tiptap/extension-image";
import { AxiosRequestConfig } from "axios";
import { PluginKey } from "../../tiptap";
import { ExtensionOptions } from "../../types";
export declare const IMAGE_BUBBLE_MENU_KEY: PluginKey<any>;
export type ExtensionImageOptions = ExtensionOptions &
  Partial<ImageOptions> & {
    uploadImage?: (
      file: File,
      options?: AxiosRequestConfig
    ) => Promise<Attachment>;
  };
export declare const ExtensionImage: import("@tiptap/core").Node<
  ExtensionImageOptions,
  any
>;
