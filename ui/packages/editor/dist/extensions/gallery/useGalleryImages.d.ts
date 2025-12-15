import { Editor } from "../../tiptap";
import { ExtensionGalleryImageItem } from "./index";
export declare function getCurrentGalleryImages(
  editor: Editor
): ExtensionGalleryImageItem[];
export declare function updateGalleryImages(
  editor: Editor,
  images: ExtensionGalleryImageItem[],
  focus?: boolean
): void;
export declare function useUploadGalleryImage(editor: Editor): {
  openFileDialog: (
    localOptions?: Partial<import("@vueuse/core").UseFileDialogOptions>
  ) => void;
};
