import { Attachment } from "@halo-dev/api-client";
import { AttachmentSimple } from "@halo-dev/ui-shared";
import { AxiosRequestConfig } from "axios";
type __VLS_Props = {
  originalLink?: string;
  accept?: string;
  upload: (file: File, options?: AxiosRequestConfig) => Promise<Attachment>;
};
declare const _default: import("vue").DefineComponent<
  __VLS_Props,
  {},
  {},
  {},
  {},
  import("vue").ComponentOptionsMixin,
  import("vue").ComponentOptionsMixin,
  {} & {
    change: (attachment?: AttachmentSimple | undefined) => any;
  },
  string,
  import("vue").PublicProps,
  Readonly<__VLS_Props> &
    Readonly<{
      onChange?:
        | ((attachment?: AttachmentSimple | undefined) => any)
        | undefined;
    }>,
  {},
  {},
  {},
  {},
  string,
  import("vue").ComponentProvideOptions,
  false,
  {},
  any
>;
export default _default;
