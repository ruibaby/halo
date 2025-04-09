import { Transaction, ResolvedPos } from "../tiptap/pm";
import { Editor } from "../tiptap/vue-3";
export declare const deleteNodeByPos: (
  $pos: ResolvedPos
) => (tr: Transaction) => boolean;
export declare const deleteNode: (nodeType: string, editor: Editor) => boolean;
