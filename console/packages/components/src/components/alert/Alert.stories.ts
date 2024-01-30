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
    closable: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof VAlert>;

export const Default: Story = {
  args: {
    type: "default",
    title: "提示",
    description: "这是一段提示信息。",
  },
};

export const Success: Story = {
  args: {
    type: "success",
    title: "成功",
    description: "这是一段操作成功的信息。",
  },
};

export const Info: Story = {
  args: {
    type: "info",
    title: "提示",
    description: "这是一段提示信息。",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    title: "警告",
    description: "这是一段警告信息。",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    title: "错误",
    description: "这是一段错误信息。",
  },
};
