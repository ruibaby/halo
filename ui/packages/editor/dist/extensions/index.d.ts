import { default as ExtensionDocument } from "@tiptap/extension-document";
import { default as ExtensionDropcursor } from "@tiptap/extension-dropcursor";
import { default as ExtensionHardBreak } from "@tiptap/extension-hard-break";
import { default as ExtensionHorizontalRule } from "@tiptap/extension-horizontal-rule";
import { default as ExtensionPlaceholder } from "@tiptap/extension-placeholder";
import { default as ExtensionBlockquote } from "./blockquote";
import { default as ExtensionBold } from "./bold";
import { default as ExtensionBulletList } from "./bullet-list";
import { default as ExtensionCode } from "./code";
import { default as ExtensionColor } from "./color";
import { default as ExtensionFontSize } from "./font-size";
import { default as ExtensionHeading } from "./heading";
import { default as ExtensionHighlight } from "./highlight";
import { default as ExtensionHistory } from "./history";
import { default as ExtensionItalic } from "./italic";
import { default as ExtensionLink } from "./link";
import { default as ExtensionListKeymap } from "./list-keymap";
import { default as ExtensionOrderedList } from "./ordered-list";
import { default as ExtensionParagraph } from "./paragraph";
import { default as ExtensionStrike } from "./strike";
import { default as ExtensionSubscript } from "./subscript";
import { default as ExtensionSuperscript } from "./superscript";
import { default as ExtensionTable } from "./table";
import { default as ExtensionTaskList } from "./task-list";
import { default as ExtensionTextAlign } from "./text-align";
import { default as ExtensionUnderline } from "./underline";
import { default as ExtensionTextStyle } from "./text-style";
import { ExtensionCodeBlock, ExtensionCodeBlockOptions } from "./code-block";
import { ExtensionCommands } from "../extensions/commands-menu";
import { default as ExtensionAudio } from "./audio";
import { default as ExtensionClearFormat } from "./clear-format";
import { ExtensionColumn, ExtensionColumns } from "./columns";
import { default as ExtensionDraggable } from "./draggable";
import { default as ExtensionFormatBrush } from "./format-brush";
import { default as ExtensionGapcursor } from "./gap-cursor";
import { default as ExtensionIframe } from "./iframe";
import { default as ExtensionImage } from "./image";
import { default as ExtensionIndent } from "./indent";
import { default as ExtensionNodeSelected } from "./node-selected";
import { ExtensionRangeSelection, RangeSelection } from "./range-selection";
import { default as ExtensionSearchAndReplace } from "./search-and-replace";
import { default as ExtensionText } from "./text";
import { default as ExtensionTrailingNode } from "./trailing-node";
import { default as ExtensionVideo } from "./video";
declare const allExtensions: (
  | import("@tiptap/core").Extension<any, any>
  | import("@tiptap/core").Node<any, any>
  | import("@tiptap/core").Mark<
      import("../types").ExtensionOptions &
        import("@tiptap/extension-bold").BoldOptions,
      any
    >
)[];
export {
  ExtensionAudio,
  ExtensionBlockquote,
  ExtensionBold,
  ExtensionBulletList,
  ExtensionClearFormat,
  ExtensionCode,
  ExtensionCodeBlock,
  ExtensionColor,
  ExtensionColumn,
  ExtensionColumns,
  ExtensionCommands,
  ExtensionDocument,
  ExtensionDraggable,
  ExtensionDropcursor,
  ExtensionFontSize,
  ExtensionFormatBrush,
  ExtensionGapcursor,
  ExtensionHardBreak,
  ExtensionHeading,
  ExtensionHighlight,
  ExtensionHistory,
  ExtensionHorizontalRule,
  ExtensionIframe,
  ExtensionImage,
  ExtensionIndent,
  ExtensionItalic,
  ExtensionLink,
  ExtensionListKeymap,
  ExtensionNodeSelected,
  ExtensionOrderedList,
  ExtensionParagraph,
  ExtensionPlaceholder,
  ExtensionRangeSelection,
  ExtensionSearchAndReplace,
  ExtensionStrike,
  ExtensionSubscript,
  ExtensionSuperscript,
  ExtensionTable,
  ExtensionTaskList,
  ExtensionText,
  ExtensionTextAlign,
  ExtensionTextStyle,
  ExtensionTrailingNode,
  ExtensionUnderline,
  ExtensionVideo,
  RangeSelection,
  allExtensions,
};
export type { ExtensionCodeBlockOptions };
