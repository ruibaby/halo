import { Node } from "../../tiptap/vue-3";
declare module "@/tiptap" {
  interface Commands<ReturnType> {
    columns: {
      insertColumns: (attrs?: { cols: number }) => ReturnType;
      addColBefore: () => ReturnType;
      addColAfter: () => ReturnType;
      deleteCol: () => ReturnType;
    };
  }
}
declare const Columns: Node<any, any>;
export default Columns;
