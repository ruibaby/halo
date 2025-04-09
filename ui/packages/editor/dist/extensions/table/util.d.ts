import {
  EditorState,
  Selection,
  Transaction,
  CellSelection,
  Node,
  TableMap,
} from "../../tiptap/pm";
export declare const selectTable: (tr: Transaction) => Transaction;
export declare const selectColumn: (
  index: number
) => (tr: Transaction) => Transaction;
export declare const selectRow: (
  index: number
) => (tr: Transaction) => Transaction;
export declare const getCellsInColumn: (columnIndex: number | number[]) => (
  selection: Selection
) =>
  | {
      pos: number;
      start: number;
      node: Node | null | undefined;
    }[]
  | undefined;
export declare const getCellsInRow: (rowIndex: number | number[]) => (
  selection: Selection
) =>
  | {
      pos: number;
      start: number;
      node: Node | null | undefined;
    }[]
  | undefined;
export declare const findTable: (selection: Selection) =>
  | {
      pos: number;
      start: number;
      depth: number;
      node: Node;
    }
  | undefined;
export declare const isRectSelected: (
  rect: any
) => (selection: CellSelection) => boolean;
export declare const isCellSelection: (
  selection: any
) => selection is CellSelection;
export declare const isColumnSelected: (
  columnIndex: number
) => (selection: any) => boolean;
export declare const isRowSelected: (
  rowIndex: number
) => (selection: any) => boolean;
export declare const isTableSelected: (selection: any) => boolean;
export declare const hasTableBefore: (editorState: EditorState) => boolean;
export declare const findNextCell: (state: EditorState) =>
  | {
      start: number;
      node: Node | null;
    }
  | undefined;
export declare const findPreviousCell: (state: EditorState) =>
  | {
      start: number;
      node: Node | null;
    }
  | undefined;
export declare const findAdjacentCell: (dir: number) => (state: EditorState) =>
  | {
      start: number;
      node: Node | null;
    }
  | undefined;
export declare const nextCell: (map: TableMap) => (
  pos: number,
  dir: number
) =>
  | {
      top: number;
      left: number;
      right: number;
      bottom: number;
    }
  | undefined;
