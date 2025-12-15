import { TaskListOptions } from "@tiptap/extension-list";
import { ExtensionOptions } from "../../types";
export type ExtensionTaskListOptions = Partial<TaskListOptions> &
  ExtensionOptions;
export declare const ExtensionTaskList: import("@tiptap/core").Node<
  ExtensionTaskListOptions,
  any
>;
