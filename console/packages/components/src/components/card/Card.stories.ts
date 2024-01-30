import type { Meta, StoryObj } from "@storybook/vue3";

import { VCard } from ".";

const meta: Meta<typeof VCard> = {
  title: "Card",
  component: VCard,
  tags: ["autodocs"],
  render: (args) => ({
    components: { VCard },
    setup() {
      return { args };
    },
    template: `
    <VCard v-bind="args">
      ${args.default}
      <template #footer>
        ${args.footer}
      </template>
    </VCard>`,
  }),
  argTypes: {
    default: {
      control: { type: "text" },
    },
  },
  args: {
    default: `Hello Halo`,
  },
};

export default meta;
type Story = StoryObj<typeof VCard>;

export const Default: Story = {
  args: {
    title: "Card",
    footer: "Footer",
  },
};
