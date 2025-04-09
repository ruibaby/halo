import { PMNode, Selection } from "../../tiptap";
import {
  Decoration,
  EditorView,
  Plugin,
  PluginKey,
  Transaction,
} from "../../tiptap/pm";
import { Editor } from "../../tiptap/vue-3";
export interface SearchAndReplacePluginProps {
  editor: Editor;
  element: HTMLElement;
  searchResultClass?: string;
  findSearchClass?: string;
}
export declare const searchAndReplacePluginKey: PluginKey<SearchAndReplacePluginState>;
export type SearchAndReplacePluginViewProps = SearchAndReplacePluginProps & {
  view: EditorView;
};
export declare class SearchAndReplacePluginView {
  editor: Editor;
  view: EditorView;
  containerElement: HTMLElement;
  init: boolean;
  constructor({ view, editor, element }: SearchAndReplacePluginViewProps);
  update(): boolean;
  destroy(): boolean;
}
export interface TextNodesWithPosition {
  text: string;
  pos: number;
  index: number;
}
export interface SearchResultWithPosition {
  pos: number;
  index: number;
  from: number;
  to: number;
}
export declare class SearchAndReplacePluginState {
  private _findIndex;
  editor: Editor;
  enable: boolean;
  findIndexFlag: boolean;
  findCount: number;
  searchTerm: string;
  replaceTerm: string;
  regex: boolean;
  caseSensitive: boolean;
  wholeWord: boolean;
  results: SearchResultWithPosition[];
  searchResultDecorations: Decoration[];
  findIndexDecoration: Decoration | undefined;
  constructor({
    editor,
    enable,
    regex,
    caseSensitive,
    wholeWord,
  }: {
    editor: Editor;
    enable?: boolean;
    regex?: boolean;
    caseSensitive?: boolean;
    wholeWord?: boolean;
  });
  get findIndex(): number;
  set findIndex(newValue: number);
  apply(tr: Transaction): SearchAndReplacePluginState;
  scrollIntoFindIndexView(): void;
  /**
   * Validate if findIndex is within the range
   * If results.length === 0, take 0
   * If less than or equal to -1, take results.length - 1
   * If greater than results.length - 1, take 0
   *
   * @param index new findIndex
   * @returns validated findIndex
   */
  verifySetIndex(index: number): number;
  /**
   * Execute full-text search functionality.
   *
   * @param Transaction
   * @returns
   * @memberof SearchAndReplacePluginState
   */
  processSearches({ doc, selection }: Transaction): SearchAndReplacePluginState;
  /**
   * Highlight the current result based on findIndex.
   *
   * @memberof SearchAndReplacePluginState
   */
  processFindIndexDecoration(): void;
  /**
   * Generate highlighted results based on the 'results'.
   *
   * @memberof SearchAndReplacePluginState
   */
  processResultDecorations(): void;
  /**
   * Reset findIndex based on the current cursor position.
   *
   * @param selection Current cursor position.
   */
  getNearestResultBySelection(selection: Selection): void;
  /**
   * Convert the entire text into flattened text with positions.
   *
   * @param doc The entire document
   * @returns Flattened text with positions
   */
  getFullText(doc: PMNode): TextNodesWithPosition[];
  /**
   * Get the regular expression object based on the current search term.
   *
   * @returns Regular expression object
   */
  getRegex: () => RegExp;
}
export declare const SearchAndReplacePlugin: (
  options: SearchAndReplacePluginProps
) => Plugin<SearchAndReplacePluginState>;
