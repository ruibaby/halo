import { PropType } from "vue";
import { BubbleMenuPluginProps } from "./BubbleMenuPlugin";
declare function __VLS_template(): {
  slots: {
    default?(_: {}): any;
  };
  refs: {
    root: HTMLDivElement;
  };
  attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<
  import("vue").ExtractPropTypes<{
    pluginKey: {
      type: PropType<BubbleMenuPluginProps["pluginKey"]>;
      default: string;
    };
    editor: {
      type: PropType<BubbleMenuPluginProps["editor"]>;
      required: true;
    };
    tippyOptions: {
      type: PropType<BubbleMenuPluginProps["tippyOptions"]>;
      default: () => {};
    };
    shouldShow: {
      type: PropType<
        Exclude<Required<BubbleMenuPluginProps>["shouldShow"], null>
      >;
      default: null;
    };
    getRenderContainer: {
      type: PropType<
        Exclude<Required<BubbleMenuPluginProps>["getRenderContainer"], null>
      >;
      default: null;
    };
    defaultAnimation: {
      type: PropType<BubbleMenuPluginProps["defaultAnimation"]>;
      default: boolean;
    };
  }>,
  {},
  {},
  {},
  {},
  import("vue").ComponentOptionsMixin,
  import("vue").ComponentOptionsMixin,
  {},
  string,
  import("vue").PublicProps,
  Readonly<
    import("vue").ExtractPropTypes<{
      pluginKey: {
        type: PropType<BubbleMenuPluginProps["pluginKey"]>;
        default: string;
      };
      editor: {
        type: PropType<BubbleMenuPluginProps["editor"]>;
        required: true;
      };
      tippyOptions: {
        type: PropType<BubbleMenuPluginProps["tippyOptions"]>;
        default: () => {};
      };
      shouldShow: {
        type: PropType<
          Exclude<Required<BubbleMenuPluginProps>["shouldShow"], null>
        >;
        default: null;
      };
      getRenderContainer: {
        type: PropType<
          Exclude<Required<BubbleMenuPluginProps>["getRenderContainer"], null>
        >;
        default: null;
      };
      defaultAnimation: {
        type: PropType<BubbleMenuPluginProps["defaultAnimation"]>;
        default: boolean;
      };
    }>
  > &
    Readonly<{}>,
  {
    getRenderContainer: (node: HTMLElement) => HTMLElement;
    defaultAnimation: boolean | undefined;
    shouldShow: (props: {
      editor: import("@tiptap/vue-3").Editor;
      state: import("../../tiptap").EditorState;
      node?: HTMLElement;
      view?: import("../../tiptap").EditorView;
      oldState?: import("../../tiptap").EditorState;
      from?: number;
      to?: number;
    }) => boolean;
    tippyOptions:
      | Partial<import("./BubbleMenuPlugin").TippyOptionProps>
      | undefined;
    pluginKey: string | import("../../tiptap").PluginKey<any>;
  },
  {},
  {},
  {},
  string,
  import("vue").ComponentProvideOptions,
  true,
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
