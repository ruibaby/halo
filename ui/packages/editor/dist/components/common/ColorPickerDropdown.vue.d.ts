type __VLS_Props = {
  modelValue?: string;
};
declare function __VLS_template(): {
  attrs: Partial<{}>;
  slots: {
    default?(_: {}): any;
    prefix?(_: {}): any;
  };
  refs: {};
  rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<
  __VLS_Props,
  {},
  {},
  {},
  {},
  import("vue").ComponentOptionsMixin,
  import("vue").ComponentOptionsMixin,
  {} & {
    "update:modelValue": (value?: string | undefined) => any;
  },
  string,
  import("vue").PublicProps,
  Readonly<__VLS_Props> &
    Readonly<{
      "onUpdate:modelValue"?: ((value?: string | undefined) => any) | undefined;
    }>,
  {
    modelValue: string;
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
