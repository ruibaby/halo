import { EditorState, MarkRange, Transaction } from "../../tiptap";
/**
 * get its marks through the first text node in the selector
 *
 * @param state editor state
 * @returns the marks of the current first text node
 */
export declare const getMarksByFirstTextNode: (
  state: EditorState
) => MarkRange[];
/**
 *
 * Set marks for the text in the currently selected content. This method will first remove all marks
 * from the currently selected text, and then add marks again.
 *
 * For CellSelection, it is necessary to iterate through ranges and set marks for each range.
 *
 * @param state editor state
 * @param marks the marks to be set
 * @param transaction transaction
 *
 * @returns transaction
 *
 * */
export declare const setMarks: (
  state: EditorState,
  marks: MarkRange[],
  transaction?: Transaction
) => Transaction;
export declare const setMarksByRange: (
  tr: Transaction,
  state: EditorState,
  range: {
    from: number;
    to: number;
  },
  marks: MarkRange[]
) => void;
