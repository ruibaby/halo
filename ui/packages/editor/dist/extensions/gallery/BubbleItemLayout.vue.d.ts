import { BubbleItemComponentProps } from "../../types";
declare const _default: import("vue").DefineComponent<
  BubbleItemComponentProps,
  {},
  {},
  {},
  {},
  import("vue").ComponentOptionsMixin,
  import("vue").ComponentOptionsMixin,
  {},
  string,
  import("vue").PublicProps,
  Readonly<BubbleItemComponentProps> & Readonly<{}>,
  {},
  {},
  {},
  {},
  string,
  import("vue").ComponentProvideOptions,
  false,
  {
    dropdownRef:
      | import("vue").CreateComponentPublicInstanceWithMixins<
          Readonly<
            import("vue").ExtractPropTypes<{
              theme: {
                type: StringConstructor;
                default: any;
              };
              referenceNode: {
                type: import("vue").PropType<() => Element>;
                default: any;
              };
              shown: {
                type: BooleanConstructor;
                default: boolean;
              };
              showGroup: {
                type: StringConstructor;
                default: any;
              };
              ariaId: {
                default: any;
              };
              disabled: {
                type: BooleanConstructor;
                default: any;
              };
              positioningDisabled: {
                type: BooleanConstructor;
                default: any;
              };
              placement: {
                type: import("vue").PropType<import("floating-vue").Placement>;
                default: any;
              };
              delay: {
                type: import("vue").PropType<
                  | string
                  | number
                  | {
                      show: number;
                      hide: number;
                    }
                >;
                default: any;
              };
              distance: {
                type: (StringConstructor | NumberConstructor)[];
                default: any;
              };
              skidding: {
                type: (StringConstructor | NumberConstructor)[];
                default: any;
              };
              triggers: {
                type: import("vue").PropType<
                  import("floating-vue").TriggerEvent[]
                >;
                default: any;
              };
              showTriggers: {
                type: import("vue").PropType<
                  | import("floating-vue").TriggerEvent[]
                  | ((
                      triggers: import("floating-vue").TriggerEvent[]
                    ) => import("floating-vue").TriggerEvent[])
                >;
                default: any;
              };
              hideTriggers: {
                type: import("vue").PropType<
                  | import("floating-vue").TriggerEvent[]
                  | ((
                      triggers: import("floating-vue").TriggerEvent[]
                    ) => import("floating-vue").TriggerEvent[])
                >;
                default: any;
              };
              popperTriggers: {
                type: import("vue").PropType<
                  import("floating-vue").TriggerEvent[]
                >;
                default: any;
              };
              popperShowTriggers: {
                type: import("vue").PropType<
                  | import("floating-vue").TriggerEvent[]
                  | ((
                      triggers: import("floating-vue").TriggerEvent[]
                    ) => import("floating-vue").TriggerEvent[])
                >;
                default: any;
              };
              popperHideTriggers: {
                type: import("vue").PropType<
                  | import("floating-vue").TriggerEvent[]
                  | ((
                      triggers: import("floating-vue").TriggerEvent[]
                    ) => import("floating-vue").TriggerEvent[])
                >;
                default: any;
              };
              container: {
                type: any[];
                default: any;
              };
              boundary: {
                type: any[];
                default: any;
              };
              strategy: {
                type: import("vue").PropType<"absolute" | "fixed">;
                default: any;
              };
              autoHide: {
                type: import("vue").PropType<
                  boolean | ((event: Event) => boolean)
                >;
                default: any;
              };
              handleResize: {
                type: BooleanConstructor;
                default: any;
              };
              instantMove: {
                type: BooleanConstructor;
                default: any;
              };
              eagerMount: {
                type: BooleanConstructor;
                default: any;
              };
              popperClass: {
                type: (
                  | ObjectConstructor
                  | StringConstructor
                  | ArrayConstructor
                )[];
                default: any;
              };
              computeTransformOrigin: {
                type: BooleanConstructor;
                default: any;
              };
              autoMinSize: {
                type: BooleanConstructor;
                default: any;
              };
              autoSize: {
                type: import("vue").PropType<boolean | "min" | "max">;
                default: any;
              };
              autoMaxSize: {
                type: BooleanConstructor;
                default: any;
              };
              autoBoundaryMaxSize: {
                type: BooleanConstructor;
                default: any;
              };
              preventOverflow: {
                type: BooleanConstructor;
                default: any;
              };
              overflowPadding: {
                type: (StringConstructor | NumberConstructor)[];
                default: any;
              };
              arrowPadding: {
                type: (StringConstructor | NumberConstructor)[];
                default: any;
              };
              arrowOverflow: {
                type: BooleanConstructor;
                default: any;
              };
              flip: {
                type: BooleanConstructor;
                default: any;
              };
              shift: {
                type: BooleanConstructor;
                default: any;
              };
              shiftCrossAxis: {
                type: BooleanConstructor;
                default: any;
              };
              noAutoFocus: {
                type: BooleanConstructor;
                default: any;
              };
              disposeTimeout: {
                type: NumberConstructor;
                default: any;
              };
            }>
          > & {
            onResize?: () => any;
            onShow?: () => any;
            onHide?: () => any;
            "onUpdate:shown"?: (shown: boolean) => any;
            "onApply-show"?: () => any;
            "onApply-hide"?: () => any;
            "onClose-group"?: () => any;
            "onClose-directive"?: () => any;
            "onAuto-hide"?: () => any;
          },
          unknown,
          unknown,
          {
            finalTheme(): string;
          },
          {
            getTargetNodes(): unknown[];
          },
          | {
              computed: {
                themeClass(): string[];
              };
            }
          | {
              methods: {
                show(...args: any[]): any;
                hide(...args: any[]): any;
                dispose(...args: any[]): any;
                onResize(...args: any[]): any;
              };
            },
          import("vue").ComponentOptionsMixin,
          {
            show: () => true;
            hide: () => true;
            "update:shown": (shown: boolean) => true;
            "apply-show": () => true;
            "apply-hide": () => true;
            "close-group": () => true;
            "close-directive": () => true;
            "auto-hide": () => true;
            resize: () => true;
          },
          import("vue").VNodeProps &
            import("vue").AllowedComponentProps &
            import("vue").ComponentCustomProps,
          {
            placement: import("floating-vue").Placement;
            strategy: "absolute" | "fixed";
            disabled: boolean;
            positioningDisabled: boolean;
            delay:
              | string
              | number
              | {
                  show: number;
                  hide: number;
                };
            distance: string | number;
            skidding: string | number;
            triggers: import("floating-vue").TriggerEvent[];
            showTriggers:
              | import("floating-vue").TriggerEvent[]
              | ((
                  triggers: import("floating-vue").TriggerEvent[]
                ) => import("floating-vue").TriggerEvent[]);
            hideTriggers:
              | import("floating-vue").TriggerEvent[]
              | ((
                  triggers: import("floating-vue").TriggerEvent[]
                ) => import("floating-vue").TriggerEvent[]);
            popperTriggers: import("floating-vue").TriggerEvent[];
            popperShowTriggers:
              | import("floating-vue").TriggerEvent[]
              | ((
                  triggers: import("floating-vue").TriggerEvent[]
                ) => import("floating-vue").TriggerEvent[]);
            popperHideTriggers:
              | import("floating-vue").TriggerEvent[]
              | ((
                  triggers: import("floating-vue").TriggerEvent[]
                ) => import("floating-vue").TriggerEvent[]);
            container: any;
            boundary: any;
            autoHide: boolean | ((event: Event) => boolean);
            handleResize: boolean;
            instantMove: boolean;
            eagerMount: boolean;
            popperClass: string | unknown[] | Record<string, any>;
            computeTransformOrigin: boolean;
            autoMinSize: boolean;
            autoSize: boolean | "min" | "max";
            autoMaxSize: boolean;
            autoBoundaryMaxSize: boolean;
            preventOverflow: boolean;
            overflowPadding: string | number;
            arrowPadding: string | number;
            arrowOverflow: boolean;
            flip: boolean;
            shift: boolean;
            shiftCrossAxis: boolean;
            noAutoFocus: boolean;
            disposeTimeout: number;
            shown: boolean;
            theme: string;
            referenceNode: () => Element;
            showGroup: string;
            ariaId: any;
          },
          true,
          {},
          {},
          import("vue").GlobalComponents,
          import("vue").GlobalDirectives,
          string,
          {},
          any,
          import("vue").ComponentProvideOptions,
          {
            P: {};
            B: {};
            D: {};
            C: {
              themeClass(): string[];
            };
            M: import("vue").MethodOptions;
            Defaults: {};
          } & {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
          } & {
            P: {};
            B: {};
            D: {};
            C: import("vue").ComputedOptions;
            M: {
              show(...args: any[]): any;
              hide(...args: any[]): any;
              dispose(...args: any[]): any;
              onResize(...args: any[]): any;
            };
            Defaults: {};
          },
          Readonly<
            import("vue").ExtractPropTypes<{
              theme: {
                type: StringConstructor;
                default: any;
              };
              referenceNode: {
                type: import("vue").PropType<() => Element>;
                default: any;
              };
              shown: {
                type: BooleanConstructor;
                default: boolean;
              };
              showGroup: {
                type: StringConstructor;
                default: any;
              };
              ariaId: {
                default: any;
              };
              disabled: {
                type: BooleanConstructor;
                default: any;
              };
              positioningDisabled: {
                type: BooleanConstructor;
                default: any;
              };
              placement: {
                type: import("vue").PropType<import("floating-vue").Placement>;
                default: any;
              };
              delay: {
                type: import("vue").PropType<
                  | string
                  | number
                  | {
                      show: number;
                      hide: number;
                    }
                >;
                default: any;
              };
              distance: {
                type: (StringConstructor | NumberConstructor)[];
                default: any;
              };
              skidding: {
                type: (StringConstructor | NumberConstructor)[];
                default: any;
              };
              triggers: {
                type: import("vue").PropType<
                  import("floating-vue").TriggerEvent[]
                >;
                default: any;
              };
              showTriggers: {
                type: import("vue").PropType<
                  | import("floating-vue").TriggerEvent[]
                  | ((
                      triggers: import("floating-vue").TriggerEvent[]
                    ) => import("floating-vue").TriggerEvent[])
                >;
                default: any;
              };
              hideTriggers: {
                type: import("vue").PropType<
                  | import("floating-vue").TriggerEvent[]
                  | ((
                      triggers: import("floating-vue").TriggerEvent[]
                    ) => import("floating-vue").TriggerEvent[])
                >;
                default: any;
              };
              popperTriggers: {
                type: import("vue").PropType<
                  import("floating-vue").TriggerEvent[]
                >;
                default: any;
              };
              popperShowTriggers: {
                type: import("vue").PropType<
                  | import("floating-vue").TriggerEvent[]
                  | ((
                      triggers: import("floating-vue").TriggerEvent[]
                    ) => import("floating-vue").TriggerEvent[])
                >;
                default: any;
              };
              popperHideTriggers: {
                type: import("vue").PropType<
                  | import("floating-vue").TriggerEvent[]
                  | ((
                      triggers: import("floating-vue").TriggerEvent[]
                    ) => import("floating-vue").TriggerEvent[])
                >;
                default: any;
              };
              container: {
                type: any[];
                default: any;
              };
              boundary: {
                type: any[];
                default: any;
              };
              strategy: {
                type: import("vue").PropType<"absolute" | "fixed">;
                default: any;
              };
              autoHide: {
                type: import("vue").PropType<
                  boolean | ((event: Event) => boolean)
                >;
                default: any;
              };
              handleResize: {
                type: BooleanConstructor;
                default: any;
              };
              instantMove: {
                type: BooleanConstructor;
                default: any;
              };
              eagerMount: {
                type: BooleanConstructor;
                default: any;
              };
              popperClass: {
                type: (
                  | ObjectConstructor
                  | StringConstructor
                  | ArrayConstructor
                )[];
                default: any;
              };
              computeTransformOrigin: {
                type: BooleanConstructor;
                default: any;
              };
              autoMinSize: {
                type: BooleanConstructor;
                default: any;
              };
              autoSize: {
                type: import("vue").PropType<boolean | "min" | "max">;
                default: any;
              };
              autoMaxSize: {
                type: BooleanConstructor;
                default: any;
              };
              autoBoundaryMaxSize: {
                type: BooleanConstructor;
                default: any;
              };
              preventOverflow: {
                type: BooleanConstructor;
                default: any;
              };
              overflowPadding: {
                type: (StringConstructor | NumberConstructor)[];
                default: any;
              };
              arrowPadding: {
                type: (StringConstructor | NumberConstructor)[];
                default: any;
              };
              arrowOverflow: {
                type: BooleanConstructor;
                default: any;
              };
              flip: {
                type: BooleanConstructor;
                default: any;
              };
              shift: {
                type: BooleanConstructor;
                default: any;
              };
              shiftCrossAxis: {
                type: BooleanConstructor;
                default: any;
              };
              noAutoFocus: {
                type: BooleanConstructor;
                default: any;
              };
              disposeTimeout: {
                type: NumberConstructor;
                default: any;
              };
            }>
          > & {
            onResize?: () => any;
            onShow?: () => any;
            onHide?: () => any;
            "onUpdate:shown"?: (shown: boolean) => any;
            "onApply-show"?: () => any;
            "onApply-hide"?: () => any;
            "onClose-group"?: () => any;
            "onClose-directive"?: () => any;
            "onAuto-hide"?: () => any;
          },
          {},
          {},
          {
            themeClass(): string[];
          } & import("vue").ComputedOptions & {
              finalTheme(): string;
            },
          import("vue").MethodOptions & {
            show(...args: any[]): any;
            hide(...args: any[]): any;
            dispose(...args: any[]): any;
            onResize(...args: any[]): any;
          } & {
            getTargetNodes(): unknown[];
          },
          {
            placement: import("floating-vue").Placement;
            strategy: "absolute" | "fixed";
            disabled: boolean;
            positioningDisabled: boolean;
            delay:
              | string
              | number
              | {
                  show: number;
                  hide: number;
                };
            distance: string | number;
            skidding: string | number;
            triggers: import("floating-vue").TriggerEvent[];
            showTriggers:
              | import("floating-vue").TriggerEvent[]
              | ((
                  triggers: import("floating-vue").TriggerEvent[]
                ) => import("floating-vue").TriggerEvent[]);
            hideTriggers:
              | import("floating-vue").TriggerEvent[]
              | ((
                  triggers: import("floating-vue").TriggerEvent[]
                ) => import("floating-vue").TriggerEvent[]);
            popperTriggers: import("floating-vue").TriggerEvent[];
            popperShowTriggers:
              | import("floating-vue").TriggerEvent[]
              | ((
                  triggers: import("floating-vue").TriggerEvent[]
                ) => import("floating-vue").TriggerEvent[]);
            popperHideTriggers:
              | import("floating-vue").TriggerEvent[]
              | ((
                  triggers: import("floating-vue").TriggerEvent[]
                ) => import("floating-vue").TriggerEvent[]);
            container: any;
            boundary: any;
            autoHide: boolean | ((event: Event) => boolean);
            handleResize: boolean;
            instantMove: boolean;
            eagerMount: boolean;
            popperClass: string | unknown[] | Record<string, any>;
            computeTransformOrigin: boolean;
            autoMinSize: boolean;
            autoSize: boolean | "min" | "max";
            autoMaxSize: boolean;
            autoBoundaryMaxSize: boolean;
            preventOverflow: boolean;
            overflowPadding: string | number;
            arrowPadding: string | number;
            arrowOverflow: boolean;
            flip: boolean;
            shift: boolean;
            shiftCrossAxis: boolean;
            noAutoFocus: boolean;
            disposeTimeout: number;
            shown: boolean;
            theme: string;
            referenceNode: () => Element;
            showGroup: string;
            ariaId: any;
          }
        >
      | null;
  },
  any
>;
export default _default;
