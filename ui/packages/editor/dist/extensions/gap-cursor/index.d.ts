import {
  Dispatch,
  EditorState,
  EditorView,
  ResolvedPos,
  Transaction,
} from "../../tiptap";
import { Extension, ParentConfig } from "../../tiptap/core";
import { Command } from "../../tiptap/pm";
declare module "@tiptap/core" {
  interface NodeConfig<Options, Storage> {
    allowGapCursor?:
      | boolean
      | null
      | ((this: {
          name: string;
          options: Options;
          storage: Storage;
          parent: ParentConfig<NodeConfig<Options>>["allowGapCursor"];
        }) => boolean | null);
  }
}
/**
 * Adds GapCursor to top-level nodes
 *
 * When the top-level nodes (nodes with a depth of 1 relative to the doc) have the {@link NodeConfig#allowGapCursor} attribute set to true,
 * a GapCursor can be inserted before and after these nodes.
 *
 * This extension provides the ability to navigate between these nodes using the arrow keys.
 *
 * Note that some nodes and shortcuts may conflict with GapCursor due to their own behaviors, such as:
 *  - CodeBlock nodes
 *  - Backspace on an empty line
 *  - Tab key
 */
declare const GapCursor: Extension<any, any>;
export declare function handleBackspaceAtStart(
  pos: number,
  state: EditorState,
  dispatch: Dispatch
): boolean;
export declare function handleInlineContent(
  $beforePos: ResolvedPos,
  state: EditorState,
  dispatch: Dispatch
): boolean;
/**
 * Handles arrow key navigation for GapCursor
 *
 * This function determines the direction (vertical or horizontal) and
 * the movement (positive or negative) based on the axis and direction parameters.
 *
 * @param {("vert" | "horiz")} axis - The axis of movement, either vertical ("vert") or horizontal ("horiz").
 * @param {number} dir - The direction of movement, positive (1) or negative (-1).
 */
export declare function arrow(axis: "vert" | "horiz", dir: number): Command;
export declare const arrowGapCursor: (
  dir: number,
  dirStr: any,
  state: EditorState,
  view?: EditorView
) => (tr: Transaction) => ResolvedPos | undefined;
export default GapCursor;
