import { EditorState, ResolvedPos, Dispatch } from "../../tiptap";
import { ExtensionOptions } from "../../types";
import { ParagraphOptions } from "@tiptap/extension-paragraph";
declare const Paragraph: import("@tiptap/core").Node<
  ExtensionOptions & ParagraphOptions,
  any
>;
export declare function deleteCurrentNodeAndSetSelection(
  $from: ResolvedPos,
  beforePos: number,
  state: EditorState,
  dispatch: Dispatch
): boolean;
export declare function handleDeletePreviousNode(
  $from: ResolvedPos,
  beforePos: number,
  state: EditorState,
  dispatch: Dispatch
): boolean;
export default Paragraph;
