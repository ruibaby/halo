import { ParagraphOptions } from "@tiptap/extension-paragraph";
import { Dispatch, EditorState, ResolvedPos } from "../../tiptap";
import { ExtensionOptions } from "../../types";
export type ExtensionParagraphOptions = ExtensionOptions &
  Partial<ParagraphOptions>;
export declare const ExtensionParagraph: import("@tiptap/core").Node<
  ExtensionParagraphOptions,
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
