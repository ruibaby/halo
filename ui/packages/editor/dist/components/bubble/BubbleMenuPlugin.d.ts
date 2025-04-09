import { EditorView, EditorState, Plugin, PluginKey } from "../../tiptap/pm";
import { Editor } from "../../tiptap/vue-3";
import { Instance, Props } from "tippy.js";
export interface TippyOptionProps extends Props {
  fixed?: boolean;
}
export interface BubbleMenuPluginProps {
  pluginKey: PluginKey | string;
  editor: Editor;
  element: HTMLElement;
  tippyOptions?: Partial<TippyOptionProps>;
  updateDelay?: number;
  shouldShow?:
    | ((props: {
        editor: Editor;
        state: EditorState;
        node?: HTMLElement;
        view?: EditorView;
        oldState?: EditorState;
        from?: number;
        to?: number;
      }) => boolean)
    | null;
  getRenderContainer?: (node: HTMLElement) => HTMLElement;
  defaultAnimation?: boolean;
}
export type BubbleMenuViewProps = BubbleMenuPluginProps & {
  view: EditorView;
};
export declare class BubbleMenuView {
  editor: Editor;
  element: HTMLElement;
  view: EditorView;
  preventHide: boolean;
  tippy: Instance<TippyOptionProps> | undefined;
  tippyOptions?: Partial<TippyOptionProps>;
  getRenderContainer?: BubbleMenuPluginProps["getRenderContainer"];
  defaultAnimation?: BubbleMenuPluginProps["defaultAnimation"];
  shouldShow: Exclude<BubbleMenuPluginProps["shouldShow"], null>;
  constructor({
    editor,
    element,
    view,
    tippyOptions,
    shouldShow,
    getRenderContainer,
    defaultAnimation,
  }: BubbleMenuViewProps);
  mousedownHandler: () => void;
  dragstartHandler: () => void;
  blurHandler: ({ event }: { event: FocusEvent }) => void;
  createTooltip(): void;
  update(view: EditorView, oldState?: EditorState): void;
  addActiveBubbleMenu: () => void;
  removeActiveBubbleMenu: () => void;
  show(): void;
  hide(): void;
  destroy(): void;
}
export declare const BubbleMenuPlugin: (
  options: BubbleMenuPluginProps
) => Plugin<any>;
