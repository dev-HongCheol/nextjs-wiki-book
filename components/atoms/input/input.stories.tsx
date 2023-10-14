import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@components/atoms";

const meta = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    hasError: {
      defaultValue: false,
      control: { type: "boolean" },
      options: [false, true],
    },
    onChange: {
      action: "onChange",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputText: Story = {
  args: {
    className: "",
    type: "text",
    name: "stories name",
    value: "input Text",
    hasError: false,
  },
};
