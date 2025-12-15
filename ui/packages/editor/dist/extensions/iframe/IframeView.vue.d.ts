import { NodeViewProps } from "../../tiptap/vue-3";
declare const _default: import("vue").DefineComponent<
  NodeViewProps,
  {},
  {},
  {},
  {},
  import("vue").ComponentOptionsMixin,
  import("vue").ComponentOptionsMixin,
  {},
  string,
  import("vue").PublicProps,
  Readonly<NodeViewProps> & Readonly<{}>,
  {},
  {},
  {},
  {},
  string,
  import("vue").ComponentProvideOptions,
  false,
  {
    inputRef:
      | import("vue").CreateComponentPublicInstanceWithMixins<
          Readonly<
            {
              modelValue?: string | number | undefined;
            } & {
              type?: string;
              label?: string;
              help?: boolean;
              placeholder?: string;
              tooltip?: string;
              autoFocus?: boolean;
            }
          > &
            Readonly<{
              onFocus?: (() => any) | undefined;
              "onUpdate:modelValue"?:
                | ((value: string | number | undefined) => any)
                | undefined;
            }>,
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
          import("vue").PublicProps,
          {
            tooltip: string;
            type: string;
            label: string;
            placeholder: string;
            help: boolean;
            autoFocus: boolean;
          },
          false,
          {},
          {},
          import("vue").GlobalComponents,
          import("vue").GlobalDirectives,
          string,
          {
            inputRef: HTMLInputElement;
          },
          HTMLDivElement,
          import("vue").ComponentProvideOptions,
          {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
          },
          Readonly<
            {
              modelValue?: string | number | undefined;
            } & {
              type?: string;
              label?: string;
              help?: boolean;
              placeholder?: string;
              tooltip?: string;
              autoFocus?: boolean;
            }
          > &
            Readonly<{
              onFocus?: (() => any) | undefined;
              "onUpdate:modelValue"?:
                | ((value: string | number | undefined) => any)
                | undefined;
            }>,
          {},
          {},
          {},
          {},
          {
            tooltip: string;
            type: string;
            label: string;
            placeholder: string;
            help: boolean;
            autoFocus: boolean;
          }
        >
      | null;
  },
  any
>;
export default _default;
