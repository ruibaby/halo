import { Editor } from "../../tiptap/vue-3";
import { Component } from "vue";
declare const _default: import("vue").DefineComponent<
  {
    editor: Editor;
    isActive?: ({ editor }: { editor: Editor }) => boolean;
    visible?: ({ editor }: { editor: Editor }) => boolean;
    icon?: Component;
    title?: string;
    action?: ({ editor }: { editor: Editor }) => void;
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
    editor: Editor;
    isActive?: ({ editor }: { editor: Editor }) => boolean;
    visible?: ({ editor }: { editor: Editor }) => boolean;
    icon?: Component;
    title?: string;
    action?: ({ editor }: { editor: Editor }) => void;
  }> &
    Readonly<{}>,
  {},
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
