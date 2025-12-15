import { Extension, PMNode, Slice } from "../../tiptap";
export declare const ExtensionUpload: Extension<any, any>;
export declare function getAllExternalNodes(slice: Slice): {
  node: PMNode;
  pos: number;
  index: number;
  parent: PMNode | null;
}[];
