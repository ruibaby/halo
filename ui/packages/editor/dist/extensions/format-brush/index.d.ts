import { Extension } from "../../tiptap";
declare module "@/tiptap" {
  interface Commands<ReturnType> {
    formatBrush: {
      copyFormatBrush: () => ReturnType;
      pasteFormatBrush: () => ReturnType;
    };
  }
}
export interface FormatBrushStore {
  formatBrush: boolean;
  formatBrushMarks: any[];
}
declare const formatBrush: Extension<any, FormatBrushStore>;
export default formatBrush;
