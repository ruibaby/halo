import { PropType } from "vue";
import { PMNode, VueEditor } from "../../tiptap";
import { DragButtonType } from "../../types";
declare const _default: import("vue").DefineComponent<
  import("vue").ExtractPropTypes<{
    editor: {
      type: PropType<VueEditor>;
      required: true;
    };
    node: {
      type: PropType<PMNode | null>;
      required: true;
    };
    pos: {
      type: NumberConstructor;
      required: true;
    };
    items: {
      type: PropType<DragButtonType[]>;
      required: true;
    };
  }>,
  {},
  {},
  {},
  {},
  import("vue").ComponentOptionsMixin,
  import("vue").ComponentOptionsMixin,
  {} & {
    close: () => any;
  },
  string,
  import("vue").PublicProps,
  Readonly<
    import("vue").ExtractPropTypes<{
      editor: {
        type: PropType<VueEditor>;
        required: true;
      };
      node: {
        type: PropType<PMNode | null>;
        required: true;
      };
      pos: {
        type: NumberConstructor;
        required: true;
      };
      items: {
        type: PropType<DragButtonType[]>;
        required: true;
      };
    }>
  > &
    Readonly<{
      onClose?: (() => any) | undefined;
    }>,
  {},
  {},
  {},
  {},
  string,
  import("vue").ComponentProvideOptions,
  true,
  {},
  HTMLDivElement
>;
export default _default;
