import { Extension } from "../../tiptap/vue-3";
import { ExtensionOptions } from "../../types";
declare module "../../tiptap" {
  interface Commands<ReturnType> {
    searchAndReplace: {
      /**
       * @description Replace first instance of search result with given replace term.
       */
      replace: () => ReturnType;
      /**
       * @description Replace all instances of search result with given replace term.
       */
      replaceAll: () => ReturnType;
      /**
       * @description Find next instance of search result.
       */
      findNext: () => ReturnType;
      /**
       * @description Find previous instance of search result.
       */
      findPrevious: () => ReturnType;
      /**
       * @description Open search panel.
       */
      openSearch: () => ReturnType;
      /**
       * @description Close search panel.
       */
      closeSearch: () => ReturnType;
    };
  }
}
export declare const ExtensionSearchAndReplace: Extension<
  ExtensionOptions,
  any
>;
