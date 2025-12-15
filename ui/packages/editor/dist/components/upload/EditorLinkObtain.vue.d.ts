import { Attachment } from "@halo-dev/api-client";
import { AttachmentSimple } from "@halo-dev/ui-shared";
import { AxiosRequestConfig } from "axios";
import { Editor } from "../../tiptap";
type __VLS_Props = {
  editor: Editor;
  accept?: string;
  uploadedFile?: File;
  uploadToAttachmentFile: (
    file: File,
    options?: AxiosRequestConfig
  ) => Promise<Attachment>;
};
declare function __VLS_template(): {
  attrs: Partial<{}>;
  slots: {
    uploading?(_: { progress: number | undefined }): any;
    error?(_: {}): any;
    icon?(_: {}): any;
  };
  refs: {};
  rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<
  __VLS_Props,
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
    setExternalLink: (attachment?: AttachmentSimple | undefined) => any;
    onUploadReady: (file: File) => any;
    onUploadProgress: (progress: number) => any;
    onUploadFinish: () => any;
    onUploadError: (error: Error) => any;
    onUploadAbort: () => any;
  },
  string,
  import("vue").PublicProps,
  Readonly<__VLS_Props> &
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
    accept: string;
    uploadedFile: File;
  },
  {},
  {},
  {},
  string,
  import("vue").ComponentProvideOptions,
  false,
  {},
  any
>;
declare const _default: __VLS_WithTemplateSlots<
  typeof __VLS_component,
  __VLS_TemplateResult["slots"]
>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
  new (): {
    $slots: S;
  };
};
