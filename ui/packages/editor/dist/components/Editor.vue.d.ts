import { CSSProperties, PropType } from "vue";
import { VueEditor } from "../tiptap";
declare function __VLS_template(): {
  attrs: Partial<{}>;
  slots: {
    content?(_: {}): any;
  };
  refs: {};
  rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<
  import("vue").ExtractPropTypes<{
    editor: {
      type: PropType<VueEditor>;
      required: true;
    };
    contentStyles: {
      type: PropType<CSSProperties>;
      required: false;
      default: () => {};
    };
    locale: {
      type: PropType<"zh-CN" | "en" | "zh" | "en-US">;
      required: false;
      default: string;
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
      editor: {
        type: PropType<VueEditor>;
        required: true;
      };
      contentStyles: {
        type: PropType<CSSProperties>;
        required: false;
        default: () => {};
      };
      locale: {
        type: PropType<"zh-CN" | "en" | "zh" | "en-US">;
        required: false;
        default: string;
      };
    }>
  > &
    Readonly<{}>,
  {
    locale: "en" | "zh-CN" | "zh" | "en-US";
    contentStyles: CSSProperties;
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
