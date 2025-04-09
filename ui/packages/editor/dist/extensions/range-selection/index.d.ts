import { Extension, ParentConfig } from "../../tiptap";
import { default as RangeSelection } from "./range-selection";
declare module "@tiptap/core" {
  interface NodeConfig<Options, Storage> {
    /**
     * Whether to allow displaying a fake selection state on the node.
     *
     * Typically, it is only necessary to display a fake selection state on child nodes,
     * so the parent node can be set to false.
     *
     * default: true
     */
    fakeSelection?:
      | boolean
      | null
      | ((this: {
          name: string;
          options: Options;
          storage: Storage;
          parent: ParentConfig<NodeConfig<Options>>["fakeSelection"];
        }) => boolean | null);
  }
}
declare const ExtensionRangeSelection: Extension<any, any>;
export { ExtensionRangeSelection, RangeSelection };
