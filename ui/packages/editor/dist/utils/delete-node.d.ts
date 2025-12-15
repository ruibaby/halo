import { Editor } from "../tiptap";
import { ResolvedPos, Transaction } from "../tiptap/pm";
export declare const deleteNodeByPos: (
  $pos: ResolvedPos
) => (tr: Transaction) => boolean;
export declare const deleteNode: (nodeType: string, editor: Editor) => boolean;
