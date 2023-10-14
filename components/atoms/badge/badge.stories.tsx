import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@components/atoms";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SbBadge: Story = {
  args: {
    children: "좋아요",
    className: "bg-yellow-200",
  },
};
