import { ExtensionOptions } from "../../types";
import { TaskListOptions } from "@tiptap/extension-task-list";
declare const TaskList: import("@tiptap/core").Node<
  ExtensionOptions & TaskListOptions,
  any
>;
export default TaskList;
