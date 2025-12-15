export interface Option {
  label: string;
  value: string;
}
type __VLS_Props = {
  container?: any;
  containerClass?: string;
  options: Option[];
  filterSort?: (options: Option[], query: string) => number;
};
type __VLS_PublicProps = {
  modelValue?: string;
} & __VLS_Props;
declare const _default: import("vue").DefineComponent<
  __VLS_PublicProps,
  {},
  {},
  {},
  {},
  import("vue").ComponentOptionsMixin,
  import("vue").ComponentOptionsMixin,
  {
    "update:modelValue": (value: string) => any;
  } & {
    select: () => any;
  },
  string,
  import("vue").PublicProps,
  Readonly<__VLS_PublicProps> &
    Readonly<{
      onSelect?: (() => any) | undefined;
      "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>,
  {},
  {},
  {},
  {},
  string,
  import("vue").ComponentProvideOptions,
  false,
  {
    inputRef: HTMLInputElement;
  },
  any
>;
export default _default;
