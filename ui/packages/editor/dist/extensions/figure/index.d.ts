import { Node } from "../../tiptap";
import { ExtensionOptions } from "../../types";
declare module "../../tiptap" {
  interface Commands<ReturnType> {
    figure: {
      setFigure: (attrs?: Record<string, unknown>) => ReturnType;
      unsetFigure: () => ReturnType;
      updateFigureContainerWidth: (width?: string) => ReturnType;
    };
  }
}
export interface ExtensionFigureOptions extends ExtensionOptions {
  HTMLAttributes: Record<string, unknown>;
}
export declare const ExtensionFigure: Node<ExtensionFigureOptions, any>;
