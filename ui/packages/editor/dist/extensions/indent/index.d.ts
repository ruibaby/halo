import { Extension, KeyboardShortcutCommand } from "../../tiptap";
import { ExtensionOptions } from "../../types";
declare module "../../tiptap" {
  interface Commands<ReturnType> {
    indent: {
      indent: () => ReturnType;
      outdent: () => ReturnType;
    };
  }
}
export interface ExtensionIndentOptions extends ExtensionOptions {
  names: Array<string>;
  indentRange: number;
  minIndentLevel: number;
  maxIndentLevel: number;
  defaultIndentLevel: number;
  HTMLAttributes: Record<string, any>;
  firstLineIndent: boolean;
}
export declare const ExtensionIndent: Extension<ExtensionIndentOptions, any>;
export declare const clamp: (val: number, min: number, max: number) => number;
export declare const getIndent: () => KeyboardShortcutCommand;
export declare const getOutdent: (
  outdentOnlyAtHead: boolean
) => KeyboardShortcutCommand;
