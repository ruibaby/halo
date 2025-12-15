type __VLS_Props = {
  title?: string;
  text?: string;
  isActive?: boolean;
  showMoreIndicator?: boolean;
};
declare function __VLS_template(): {
  attrs: Partial<{}>;
  slots: {
    icon?(_: {}): any;
  };
  refs: {};
  rootEl: HTMLButtonElement;
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
    isActive: boolean;
    title: string;
    text: string;
    showMoreIndicator: boolean;
  },
  {},
  {},
  {},
  string,
  import("vue").ComponentProvideOptions,
  false,
  {},
  HTMLButtonElement
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
