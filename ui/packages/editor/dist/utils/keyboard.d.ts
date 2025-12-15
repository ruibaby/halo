/**
 * Keyboard shortcut utilities
 * Reference: tiptap keyboard shortcuts format https://tiptap.dev/docs/editor/core-concepts/keyboard-shortcuts
 */
interface ParsedShortcut {
  key: string;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
}
/**
 * Parse shortcut string
 * Supported formats:
 * - Mod-l (Mac: Cmd+L, Others: Ctrl+L)
 * - Control-Shift-Enter
 * - Shift-Tab
 * - Alt-1
 *
 * @param shortcut - Shortcut string
 * @returns Parsed shortcut object
 */
export declare function parseShortcut(shortcut: string): ParsedShortcut;
/**
 * Check if a keyboard event matches a shortcut
 * @param event - Keyboard event
 * @param shortcut - Shortcut string
 * @returns Whether the event matches the shortcut
 */
export declare function matchShortcut(
  event: KeyboardEvent,
  shortcut: string
): boolean;
/**
 * Format shortcut to display text
 * @param shortcut - Shortcut string
 * @returns Formatted display text
 */
export declare function formatShortcut(shortcut: string): string;
export {};
