import { Editor } from "../../tiptap/vue-3";
declare function __VLS_template(): {
  slots: {
    content?(_: {}): any;
    actions?(_: {}): any;
  };
  refs: {};
  attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<
  {
    selected: boolean;
    editor: Editor;
    getPos: () => number;
    deleteNode: () => void;
  },
  {},
  {},
  {},
  {},
  import("vue").ComponentOptionsMixin,
  import("vue").ComponentOptionsMixin,
  {},
  string,
  import("vue").PublicProps,
  Readonly<{
    selected: boolean;
    editor: Editor;
    getPos: () => number;
    deleteNode: () => void;
  }> &
    Readonly<{}>,
  {
    selected: boolean;
  },
  {},
  {},
  {},
  string,
  import("vue").ComponentProvideOptions,
  false,
  {},
  any
>;
declare const _default: __VLS_WithTemplateSlots<
  typeof __VLS_component,
  __VLS_TemplateResult["slots"]
>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
  new (): {
    $slots: S;
  };
};
