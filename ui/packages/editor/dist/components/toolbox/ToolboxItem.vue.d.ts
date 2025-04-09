import { Editor } from "../../tiptap/vue-3";
import { Component } from "vue";
declare const _default: import("vue").DefineComponent<
  {
    editor?: Editor;
    title?: string;
    description?: string;
    action?: () => void;
    icon?: Component;
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
    editor?: Editor;
    title?: string;
    description?: string;
    action?: () => void;
    icon?: Component;
  }> &
    Readonly<{}>,
  {
    title: string;
    editor: Editor;
    icon: Component;
    action: () => void;
    description: string;
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
export default _default;
