import {
  EditorState,
  Node,
  ResolvedPos,
  Selection,
  Mappable,
} from "../../tiptap/pm";
/**
 * The RangeSelection class represents a selection range within a document.
 * The content can include text, paragraphs, block-level content, etc.
 *
 * It has a starting position and an ending position. When the given range includes block-level content,
 * the RangeSelection will automatically expand to include the block-level content at the corresponding depth.
 *
 * The RangeSelection must not contain empty content.
 */
declare class RangeSelection extends Selection {
  /**
   * Creates a RangeSelection between the specified positions.
   *
   * @param $anchor - The starting position of the selection.
   * @param $head - The ending position of the selection.
   */
  constructor($anchor: ResolvedPos, $head: ResolvedPos);
  map(doc: Node, mapping: Mappable): Selection;
  eq(other: Selection): boolean;
  getBookmark(): RangeBookmark;
  toJSON(): any;
  /**
   * Validates if the given positions can form a valid RangeSelection in the given state.
   *
   * @param state - The editor state.
   * @param anchor - The starting position.
   * @param head - The ending position.
   * @returns True if the positions form a valid RangeSelection, otherwise false.
   */
  static valid(state: EditorState, anchor: number, head: number): boolean;
  /**
   * Returns a RangeSelection spanning the given positions.
   *
   * When the given range includes block-level content, if only a part is included,
   * the selection will be expanded to encompass the block-level content at the corresponding depth.
   *
   * Expansion: If the selection includes all depth nodes of the current block-level content but not the entire last node,
   * the selection will be expanded to include the node at that depth.
   *
   * @param $anchor - The starting position of the selection.
   * @param $head - The ending position of the selection.
   * @returns A new RangeSelection that spans the given positions.
   */
  static between(
    $anchor: ResolvedPos,
    $head: ResolvedPos
  ): RangeSelection | null;
  static fromJSON(doc: Node, json: any): RangeSelection;
  static create(doc: Node, anchor: number, head: number): RangeSelection;
  static allRange(doc: Node): RangeSelection;
}
declare class RangeBookmark {
  readonly anchor: number;
  readonly head: number;
  constructor(anchor: number, head: number);
  map(mapping: Mappable): RangeBookmark;
  resolve(doc: Node): RangeSelection;
}
export declare function checkRangeSelection(
  $anchor: ResolvedPos,
  $head: ResolvedPos
): void;
export declare function rangeNodesBetween(
  $anchor: ResolvedPos,
  $head: ResolvedPos
): {
  node: Node;
  pos: number;
  parent: Node | null;
  index: number;
}[];
export default RangeSelection;
