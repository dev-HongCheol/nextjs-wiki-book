import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@components/atoms";

const meta = {
  title: "Atoms/TextArea",
  component: Textarea,
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
    rows: {
      defaultValue: 5,
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SbTextArea: Story = {
  args: {
    name: "stories name",
    value: "input Text",
    hasError: true,
  },
};
