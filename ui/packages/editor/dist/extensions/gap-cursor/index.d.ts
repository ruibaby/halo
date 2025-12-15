import { Extension, ParentConfig } from "../../tiptap/core";
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
export declare const ExtensionGapCursor: Extension<any, any>;
