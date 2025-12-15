import { OrderedListOptions } from "@tiptap/extension-list";
import { ExtensionOptions } from "../../types";
export type ExtensionOrderedListOptions = Partial<OrderedListOptions> &
  ExtensionOptions;
export declare const ExtensionOrderedList: import("@tiptap/core").Node<
  ExtensionOrderedListOptions,
  any
>;
