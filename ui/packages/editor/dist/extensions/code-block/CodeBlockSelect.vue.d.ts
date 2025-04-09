export interface Option {
  label: string;
  value: string;
}
declare let __VLS_typeProps: {
  container?: any;
  containerClass?: string;
  options: Option[];
  filterSort?: (options: Option[], query: string) => number;
};
declare const __VLS_defaults: {
  modelValue: string;
};
type __VLS_PublicProps = {
  modelValue?: (typeof __VLS_defaults)["modelValue"];
} & typeof __VLS_typeProps;
declare const _default: import("vue").DefineComponent<
  __VLS_PublicProps,
  {},
  {},
  {},
  {},
  import("vue").ComponentOptionsMixin,
  import("vue").ComponentOptionsMixin,
  {
    "update:modelValue": (modelValue: string) => any;
  } & {
    select: () => any;
  },
  string,
  import("vue").PublicProps,
  Readonly<__VLS_PublicProps> &
    Readonly<{
      onSelect?: (() => any) | undefined;
      "onUpdate:modelValue"?: ((modelValue: string) => any) | undefined;
    }>,
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
