import { Extension } from "../../tiptap";
import { ExtensionOptions } from "../../types";
declare module "../../tiptap" {
  interface Commands<ReturnType> {
    formatBrush: {
      copyFormatBrush: () => ReturnType;
      pasteFormatBrush: () => ReturnType;
    };
  }
}
export interface ExtensionFormatBrushStore {
  formatBrush: boolean;
  formatBrushMarks: any[];
}
export declare const ExtensionFormatBrush: Extension<
  ExtensionOptions,
  ExtensionFormatBrushStore
>;
