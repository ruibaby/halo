import { EditorView, Node, ResolvedPos } from "../../tiptap/pm";
import { Extension } from "../../tiptap/vue-3";
export interface ActiveNode {
  $pos: ResolvedPos;
  node: Node;
  el: HTMLElement;
  offset: number;
  domOffsetLeft: number;
  domOffsetTop: number;
}
export declare const selectAncestorNodeByDom: (
  dom: HTMLElement,
  view: EditorView
) => ActiveNode | null;
declare const Draggable: Extension<any, any>;
export default Draggable;
