import type { Meta, StoryObj } from "@storybook/vue3";

import { VAlert } from ".";

const meta: Meta<typeof VAlert> = {
  title: "Alert",
  component: VAlert,
  tags: ["autodocs"],
  render: (args) => ({
    components: { VAlert },
    setup() {
      return { args };
    },
    template: `<VAlert v-bind="args"></VAlert>`,
  }),
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["default", "success", "info", "warning", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof VAlert>;

export const Default: Story = {
  args: {
    type: "default",
    title: "Halo",
    description: "Halo",
  },
};
