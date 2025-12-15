type __VLS_Props = {
  disabled?: boolean;
  isActive?: boolean;
};
declare function __VLS_template(): {
  attrs: Partial<{}>;
  slots: {
    icon?(_: {}): any;
    default?(_: {}): any;
  };
  refs: {};
  rootEl: HTMLDivElement;
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
    click: (e: MouseEvent) => any;
  },
  string,
  import("vue").PublicProps,
  Readonly<__VLS_Props> &
    Readonly<{
      onClick?: ((e: MouseEvent) => any) | undefined;
    }>,
  {
    disabled: boolean;
    isActive: boolean;
  },
  {},
  {},
  {},
  string,
  import("vue").ComponentProvideOptions,
  false,
  {},
  HTMLDivElement
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
