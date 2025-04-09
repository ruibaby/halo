import { ExtensionOptions } from "../../types";
import { HistoryOptions } from "@tiptap/extension-history";
declare const History: import("@tiptap/core").Extension<
  ExtensionOptions & HistoryOptions,
  any
>;
export default History;
