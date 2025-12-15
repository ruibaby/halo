import { Editor, VueEditor } from "../tiptap";
/**
 * Copy the selected content from the editor to the clipboard
 * Supports both HTML and plain text formats
 *
 * @param editor - TipTap editor instance
 * @returns Promise<boolean> - Whether the copy operation was successful
 */
export declare function copySelectionToClipboard(
  editor: Editor | VueEditor
): Promise<boolean>;
