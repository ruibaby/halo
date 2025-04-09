import { Extension } from "../../tiptap/vue-3";
export type FontSizeOptions = {
  types: string[];
};
declare module "@/tiptap" {
  interface Commands<ReturnType> {
    fontSize: {
      setFontSize: (size: number) => ReturnType;
      unsetFontSize: () => ReturnType;
    };
  }
}
declare const FontSize: Extension<FontSizeOptions, any>;
export default FontSize;
