type __VLS_Props = {
  tooltip?: string;
  selected?: boolean;
  disabled?: boolean;
  isActive?: boolean;
  visible?: boolean;
};
declare function __VLS_template(): {
  attrs: Partial<{}>;
  slots: {
    icon?(_: {}): any;
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
  {},
  string,
  import("vue").PublicProps,
  Readonly<__VLS_Props> & Readonly<{}>,
  {
    tooltip: string;
    selected: boolean;
    disabled: boolean;
    isActive: boolean;
    visible: boolean;
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
