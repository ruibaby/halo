import { PMNode } from "../../tiptap";
import { ResolvedPos, Selection, Slice, Mappable } from "../../tiptap/pm";
declare class GapCursorSelection extends Selection {
  private start;
  constructor($pos: ResolvedPos);
  map(doc: PMNode, mapping: Mappable): Selection;
  content(): Slice;
  eq(other: Selection): boolean;
  toJSON(): any;
  get isStart(): boolean | null;
  static fromJSON(doc: PMNode, json: any): GapCursorSelection;
  getBookmark(): GapBookmark;
  /**
   * Validates if a GapCursor can be placed at the given position
   *
   * This function checks whether a GapCursor can be placed at the specified position in the document.
   * It ensures that the position is not within a text block, and that the node at the position allows a GapCursor.
   *
   * @param {ResolvedPos} $pos - The resolved position in the document to validate.
   * @returns {boolean} - Returns true if a GapCursor can be placed at the given position, false otherwise.
   */
  static valid($pos: ResolvedPos): boolean;
  static findGapCursorFrom(
    $pos: ResolvedPos,
    dir: number,
    mustMove?: boolean
  ): ResolvedPos | null;
}
declare class GapBookmark {
  readonly pos: number;
  constructor(pos: number);
  map(mapping: Mappable): GapBookmark;
  resolve(doc: PMNode): Selection | GapCursorSelection;
}
/**
 * Checks if the position before the given resolved position is closed
 *
 * This function traverses up the document tree from the given resolved position and checks if the position
 * immediately before it is closed. A position is considered closed if the previous node is closed or
 * if the parent node is isolating.
 *
 * @param {ResolvedPos} $pos - The resolved position in the document to check.
 * @returns {boolean} - Returns true if the position before the given position is closed, false otherwise.
 */
export declare function closedBefore($pos: ResolvedPos): boolean;
export declare function closedAfter($pos: ResolvedPos): boolean;
export declare function isNodeStart($pos: ResolvedPos): boolean | null;
export default GapCursorSelection;
