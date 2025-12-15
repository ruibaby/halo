import { Attachment } from "@halo-dev/api-client";
import { AxiosRequestConfig } from "axios";
import { Node, PluginKey } from "../../tiptap";
import { ExtensionOptions } from "../../types";
declare module "../../tiptap" {
  interface Commands<ReturnType> {
    gallery: {
      setGallery: (options?: { images?: string[] }) => ReturnType;
    };
  }
}
export type ExtensionGalleryImageItem = {
  src: string;
  aspectRatio: number;
};
export declare const GALLERY_BUBBLE_MENU_KEY: PluginKey<any>;
export type ExtensionGalleryOptions = ExtensionOptions & {
  groupSize?: number;
  gap?: number;
  allowBase64: boolean;
  HTMLAttributes: Record<string, unknown>;
  uploadImage?: (
    file: File,
    options?: AxiosRequestConfig
  ) => Promise<Attachment>;
};
export declare const ExtensionGallery: Node<
  ExtensionGalleryOptions,
  {
    images: ExtensionGalleryImageItem[];
  }
>;
