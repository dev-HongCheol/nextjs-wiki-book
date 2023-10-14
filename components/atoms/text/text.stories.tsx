import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@components/atoms";

const meta = {
  title: "Atoms/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      defaultValue: "primary",
      control: { type: "radio" },
      options: ["primary", "secondary"],
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryText: Story = {
  args: {
    children: "text",
    variant: "primary",
    className: "text-xs",
  },
};

export const SecondaryText: Story = {
  args: {
    children: "button",
    variant: "secondary",
  },
};
