import { Attachment } from "@halo-dev/api-client";
import { AxiosRequestConfig } from "axios";
import { Extension } from "../../tiptap";
import { ExtensionOptions } from "../../types";
export type ExtensionGalleryBubbleOptions = ExtensionOptions & {
  uploadImage?: (
    file: File,
    options?: AxiosRequestConfig
  ) => Promise<Attachment>;
};
export declare const ExtensionGalleryBubble: Extension<
  ExtensionGalleryBubbleOptions,
  any
>;
