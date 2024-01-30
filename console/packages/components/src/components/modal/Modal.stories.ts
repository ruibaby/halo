import type { Meta, StoryObj } from "@storybook/vue3";

import { VModal } from ".";
import { VButton } from "../button";
import { IconArrowLeft, IconArrowRight } from "@/icons/icons";
import { VSpace } from "../space";
import { ref } from "vue";

const meta: Meta<typeof VModal> = {
  title: "Modal",
  component: VModal,
  tags: ["autodocs"],
  render: (args) => ({
    components: { VModal, VButton, VSpace, IconArrowLeft, IconArrowRight },
    setup() {
      const modal = ref();
      return { args, modal };
    },
    template: `
      <VButton type="secondary" @click="args.visible = true">打开</VButton>
      <VModal
        ref="modal"
        v-if="args.visible"
        :fullscreen="args.fullscreen"
        :title="args.title"
        :width="args.width"
        :mount-to-body="true"
        :layerClosable="true"
        @close="args.visible = false"
      >
        <div class="flex flex-col">
          Hello Halo
        </div>

        <template #footer>
          <VSpace>
            <VButton type="primary" @click="modal.close()">
              确定
            </VButton>
            <VButton @click="modal.close()">取消</VButton>
          </VSpace>
        </template>
      </VModal>
    `,
  }),
  args: {
    visible: false,
  },
};

export default meta;
type Story = StoryObj<typeof VModal>;

export const Default: Story = {
  args: {
    title: "Modal",
  },
};
