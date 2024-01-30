import type { Meta, StoryObj } from "@storybook/vue3";
import { VTabs, VTabItem } from ".";

const meta: Meta<typeof VTabs> = {
  title: "Tabs",
  component: VTabs,
  tags: ["autodocs"],
  render: (args) => ({
    components: { VTabs, VTabItem },
    setup() {
      return {
        args,
      };
    },
    template: `
      <div class="p-3">
        <VTabs v-model:activeId="args.activeId" type="${args.type}">
          <VTabItem id="general" label="基本设置">
            基本设置
          </VTabItem>
          <VTabItem id="post" label="文章设置">
            文章设置
          </VTabItem>
          <VTabItem id="seo" label="SEO 设置">
            SEO 设置
          </VTabItem>
        </VTabs>
      </div>
    `,
  }),
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["default", "pills", "outline"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof VTabs>;

export const Default: Story = {
  args: {
    activeId: "general",
    type: "default",
  },
};

export const Pills: Story = {
  args: {
    activeId: "general",
    type: "pills",
  },
};

export const Outline: Story = {
  args: {
    activeId: "general",
    type: "outline",
  },
};
