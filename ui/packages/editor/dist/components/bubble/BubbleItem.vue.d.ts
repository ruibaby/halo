import { Editor } from "../../tiptap/vue-3";
import { Component } from "vue";
declare const _default: import("vue").DefineComponent<
  {
    editor: Editor;
    isActive?: ({ editor }: { editor: Editor }) => boolean;
    visible?: ({ editor }: { editor: Editor }) => boolean;
    icon?: Component;
    iconStyle?: string;
    title?: string;
    action?: ({ editor }: { editor: Editor }) => Component | void;
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
    iconStyle?: string;
    title?: string;
    action?: ({ editor }: { editor: Editor }) => Component | void;
  }> &
    Readonly<{}>,
  {
    title: string;
    icon: Component;
    isActive: ({ editor }: { editor: Editor }) => boolean;
    visible: ({ editor }: { editor: Editor }) => boolean;
    iconStyle: string;
    action: ({ editor }: { editor: Editor }) => Component | void;
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
