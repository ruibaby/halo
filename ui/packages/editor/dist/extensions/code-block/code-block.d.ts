import { EditorState } from "../../tiptap/pm";
declare module "@/tiptap" {
  interface Commands<ReturnType> {
    codeIndent: {
      codeIndent: () => ReturnType;
      codeOutdent: () => ReturnType;
    };
  }
}
export interface Option {
  label: string;
  value: string;
}
export interface CodeBlockOptions {
  /**
   * Define whether the node should be exited on triple enter.
   * @default true
   */
  exitOnTripleEnter: boolean;
  /**
   * Define whether the node should be exited on arrow down if there is no node after it.
   * @default true
   */
  exitOnArrowDown: boolean;
  /**
   * Custom HTML attributes that should be added to the rendered HTML tag.
   * @default {}
   * @example { class: 'foo' }
   */
  HTMLAttributes: Record<string, any>;
  /**
   * The default language for code block
   * @default null
   */
  defaultLanguage: string | null | undefined;
  /**
   * The default theme for code block
   * @default null
   */
  defaultTheme: string | null | undefined;
}
export interface ExtensionCodeBlockOptions extends CodeBlockOptions {
  /**
   * Used for language list
   *
   * @default []
   */
  languages:
    | Array<Option>
    | ((state: EditorState) => Array<{
        label: string;
        value: string;
      }>);
  /**
   * Used for theme list
   *
   * @default []
   */
  themes?:
    | Array<{
        label: string;
        value: string;
      }>
    | ((state: EditorState) => Array<{
        label: string;
        value: string;
      }>);
}
declare const _default: import("@tiptap/core").Node<
  ExtensionCodeBlockOptions,
  any
>;
export default _default;
