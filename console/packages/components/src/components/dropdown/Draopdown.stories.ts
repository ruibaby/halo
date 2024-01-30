import type { Meta, StoryObj } from "@storybook/vue3";

import { VDropdown, VDropdownItem, VDropdownDivider } from ".";
import { VButton } from "../button";

const meta: Meta<typeof VDropdown> = {
  title: "Dropdown",
  component: VDropdown,
  tags: ["autodocs"],
  render: (args) => ({
    components: { VDropdown, VDropdownItem, VDropdownDivider, VButton },
    setup() {
      return {
        args,
      };
    },
    template: `
      <VDropdown>
        ${args.default}
        <template #popper>
          ${args.popper}
        </template>
      </VDropdown>
    `,
  }),
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof VDropdown>;

export const Default: Story = {
  args: {
    default: `<VButton>更多</VButton>`,
    popper: `
      <VDropdownItem type="danger">删除</VDropdownItem>
      <VDropdownDivider></VDropdownDivider>
      <VDropdownItem>删除</VDropdownItem>
      <VDropdownItem>编辑</VDropdownItem>
    `,
  },
};
