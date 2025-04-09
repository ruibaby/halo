import { Extension, KeyboardShortcutCommand } from "../../tiptap";
declare module "@/tiptap" {
  interface Commands<ReturnType> {
    indent: {
      indent: () => ReturnType;
      outdent: () => ReturnType;
    };
  }
}
type IndentOptions = {
  names: Array<string>;
  indentRange: number;
  minIndentLevel: number;
  maxIndentLevel: number;
  defaultIndentLevel: number;
  HTMLAttributes: Record<string, any>;
  firstLineIndent: boolean;
};
declare const Indent: Extension<IndentOptions, never>;
export declare const clamp: (val: number, min: number, max: number) => number;
export declare const getIndent: () => KeyboardShortcutCommand;
export declare const getOutdent: (
  outdentOnlyAtHead: boolean
) => KeyboardShortcutCommand;
export default Indent;
