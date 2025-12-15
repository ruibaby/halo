import { AttachmentSimple } from "@halo-dev/ui-shared";
import { Ref } from "vue";
export declare function useExternalAssetsTransfer(
  src: Ref<string | undefined>,
  callback: (attachment: AttachmentSimple) => void
): {
  isExternalAsset: import("vue").ComputedRef<boolean>;
  transferring: Ref<boolean, boolean>;
  handleTransfer: () => Promise<void>;
};
