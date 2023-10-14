import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@components/atoms";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      defaultValue: "primary",
      control: { type: "radio" },
      options: ["primary", "secondary"],
      //   table: {
      //     type: { summary: "string" },
      //   },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    children: "button",
    variant: "primary",
  },
};

export const SecondaryButton: Story = {
  args: {
    children: "button",
    variant: "secondary",
  },
};
