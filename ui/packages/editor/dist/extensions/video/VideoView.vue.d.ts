import { AttachmentSimple } from "@halo-dev/ui-shared";
import { NodeViewProps } from "../../tiptap";
declare const _default: import("vue").DefineComponent<
  NodeViewProps,
  {},
  {},
  {},
  {},
  import("vue").ComponentOptionsMixin,
  import("vue").ComponentOptionsMixin,
  {},
  string,
  import("vue").PublicProps,
  Readonly<NodeViewProps> & Readonly<{}>,
  {},
  {},
  {},
  {},
  string,
  import("vue").ComponentProvideOptions,
  false,
  {
    editorLinkObtain:
      | ({
          $: import("vue").ComponentInternalInstance;
          $data: {};
          $props: {
            readonly editor: import("@tiptap/core").Editor;
            readonly accept?: string | undefined;
            readonly uploadedFile?: File | undefined;
            readonly uploadToAttachmentFile: (
              file: File,
              options?: import("axios").AxiosRequestConfig
            ) => Promise<import("@halo-dev/api-client").Attachment>;
            readonly onSetExternalLink?:
              | ((attachment?: AttachmentSimple | undefined) => any)
              | undefined;
            readonly onOnUploadReady?: ((file: File) => any) | undefined;
            readonly onOnUploadProgress?:
              | ((progress: number) => any)
              | undefined;
            readonly onOnUploadFinish?: (() => any) | undefined;
            readonly onOnUploadError?: ((error: Error) => any) | undefined;
            readonly onOnUploadAbort?: (() => any) | undefined;
          } & import("vue").VNodeProps &
            import("vue").AllowedComponentProps &
            import("vue").ComponentCustomProps;
          $attrs: {
            [x: string]: unknown;
          };
          $refs: {
            [x: string]: unknown;
          };
          $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
          }>;
          $root: import("vue").ComponentPublicInstance | null;
          $parent: import("vue").ComponentPublicInstance | null;
          $host: Element | null;
          $emit: ((
            event: "setExternalLink",
            attachment?: AttachmentSimple | undefined
          ) => void) &
            ((event: "onUploadReady", file: File) => void) &
            ((event: "onUploadProgress", progress: number) => void) &
            ((event: "onUploadFinish") => void) &
            ((event: "onUploadError", error: Error) => void) &
            ((event: "onUploadAbort") => void);
          $el: any;
          $options: import("vue").ComponentOptionsBase<
            Readonly<{
              editor: import("@tiptap/core").Editor;
              accept?: string;
              uploadedFile?: File;
              uploadToAttachmentFile: (
                file: File,
                options?: import("axios").AxiosRequestConfig
              ) => Promise<import("@halo-dev/api-client").Attachment>;
            }> &
              Readonly<{
                onSetExternalLink?:
                  | ((attachment?: AttachmentSimple | undefined) => any)
                  | undefined;
                onOnUploadReady?: ((file: File) => any) | undefined;
                onOnUploadProgress?: ((progress: number) => any) | undefined;
                onOnUploadFinish?: (() => any) | undefined;
                onOnUploadError?: ((error: Error) => any) | undefined;
                onOnUploadAbort?: (() => any) | undefined;
              }>,
            {
              abort: () => void;
              retry: () => void;
              reset: () => void;
            },
            {},
            {},
            {},
            import("vue").ComponentOptionsMixin,
            import("vue").ComponentOptionsMixin,
            {} & {
              setExternalLink: (
                attachment?: AttachmentSimple | undefined
              ) => any;
              onUploadReady: (file: File) => any;
              onUploadProgress: (progress: number) => any;
              onUploadFinish: () => any;
              onUploadError: (error: Error) => any;
              onUploadAbort: () => any;
            },
            string,
            {
              accept: string;
              uploadedFile: File;
            },
            {},
            string,
            {},
            import("vue").GlobalComponents,
            import("vue").GlobalDirectives,
            string,
            import("vue").ComponentProvideOptions
          > & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?:
              | ((e: import("vue").DebuggerEvent) => void)
              | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?:
              | ((e: import("vue").DebuggerEvent) => void)
              | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?:
              | ((
                  err: unknown,
                  instance: import("vue").ComponentPublicInstance | null,
                  info: string
                ) => boolean | void)
              | ((
                  err: unknown,
                  instance: import("vue").ComponentPublicInstance | null,
                  info: string
                ) => boolean | void)[];
          };
          $forceUpdate: () => void;
          $nextTick: typeof import("vue").nextTick;
          $watch<T extends string | ((...args: any) => any)>(
            source: T,
            cb: T extends (...args: any) => infer R
              ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any
              : (
                  ...args: [any, any, import("@vue/reactivity").OnCleanup]
                ) => any,
            options?: import("vue").WatchOptions
          ): import("vue").WatchStopHandle;
        } & Readonly<{
          accept: string;
          uploadedFile: File;
        }> &
          Omit<
            Readonly<{
              editor: import("@tiptap/core").Editor;
              accept?: string;
              uploadedFile?: File;
              uploadToAttachmentFile: (
                file: File,
                options?: import("axios").AxiosRequestConfig
              ) => Promise<import("@halo-dev/api-client").Attachment>;
            }> &
              Readonly<{
                onSetExternalLink?:
                  | ((attachment?: AttachmentSimple | undefined) => any)
                  | undefined;
                onOnUploadReady?: ((file: File) => any) | undefined;
                onOnUploadProgress?: ((progress: number) => any) | undefined;
                onOnUploadFinish?: (() => any) | undefined;
                onOnUploadError?: ((error: Error) => any) | undefined;
                onOnUploadAbort?: (() => any) | undefined;
              }>,
            "reset" | "abort" | "retry" | ("accept" | "uploadedFile")
          > &
          import("vue").ShallowUnwrapRef<{
            abort: () => void;
            retry: () => void;
            reset: () => void;
          }> & {} & import("vue").ComponentCustomProperties & {} & {
            $slots: {
              uploading?(_: { progress: number | undefined }): any;
              error?(_: {}): any;
              icon?(_: {}): any;
            };
          })
      | null;
  },
  any
>;
export default _default;
