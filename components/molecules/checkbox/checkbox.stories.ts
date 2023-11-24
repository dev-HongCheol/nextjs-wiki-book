import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "..";

const meta = {
  title: "molecules/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: {
      defaultValue: "",
      control: { type: "text" },
    },
    checked: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxStories: Story = {
  args: {
    label: "체크",
  },
};
