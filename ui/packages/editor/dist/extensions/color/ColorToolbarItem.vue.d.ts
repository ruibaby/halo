import { Editor } from "../../tiptap/vue-3";
import { Component } from "vue";
declare const _default: import("vue").DefineComponent<
  {
    editor?: Editor;
    isActive?: boolean;
    disabled?: boolean;
    title?: string;
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
    isActive?: boolean;
    disabled?: boolean;
    title?: string;
    action?: () => void;
    icon?: Component;
  }> &
    Readonly<{}>,
  {
    title: string;
    editor: Editor;
    icon: Component;
    isActive: boolean;
    action: () => void;
    disabled: boolean;
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
