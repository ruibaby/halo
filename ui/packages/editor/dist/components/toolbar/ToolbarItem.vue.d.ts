import { ToolbarItem } from "../../types";
import { Component } from "vue";
declare const _default: import("vue").DefineComponent<
  {
    isActive?: boolean;
    disabled?: boolean;
    title?: string;
    action?: () => void;
    icon?: Component;
    children?: ToolbarItem[];
  },
  {},
  {},
  {},
  {},
  import("vue").ComponentOptionsMixin,
  import("vue").ComponentOptionsMixin,
  {},
  string,
  import("vue").PublicProps,
  Readonly<{
    isActive?: boolean;
    disabled?: boolean;
    title?: string;
    action?: () => void;
    icon?: Component;
    children?: ToolbarItem[];
  }> &
    Readonly<{}>,
  {
    title: string;
    children: ToolbarItem[];
    icon: Component;
    isActive: boolean;
    action: () => void;
    disabled: boolean;
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
export default _default;
