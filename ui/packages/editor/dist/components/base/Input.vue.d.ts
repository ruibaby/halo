type __VLS_Props = {
  type?: string;
  label?: string;
  help?: boolean;
  placeholder?: string;
  tooltip?: string;
  autoFocus?: boolean;
};
type __VLS_PublicProps = {
  modelValue?: string | number | undefined;
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
    "update:modelValue": (value: string | number | undefined) => any;
  } & {
    focus: () => any;
  },
  string,
  import("vue").PublicProps,
  Readonly<__VLS_PublicProps> &
    Readonly<{
      onFocus?: (() => any) | undefined;
      "onUpdate:modelValue"?:
        | ((value: string | number | undefined) => any)
        | undefined;
    }>,
  {
    tooltip: string;
    type: string;
    label: string;
    placeholder: string;
    help: boolean;
    autoFocus: boolean;
  },
  {},
  {},
  {},
  string,
  import("vue").ComponentProvideOptions,
  false,
  {
    inputRef: HTMLInputElement;
  },
  HTMLDivElement
>;
export default _default;
