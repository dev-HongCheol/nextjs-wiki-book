import type { Meta, StoryObj } from "@storybook/react";
import { CloseIcon } from "./IconButton";

const meta = {
  title: "Atoms/IconButton",
  component: CloseIcon,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      defaultValue: "white",
      control: { type: "string" },
    },
    color: {
      defaultValue: "red",
      control: { type: "string" },
    },
  },
} satisfies Meta<typeof CloseIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputText: Story = {
  args: {
    className: "",
    backgroundColor: "black",
    color: "green",
    onClick: () => {},
  },
};
