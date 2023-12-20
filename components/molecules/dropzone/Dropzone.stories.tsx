import { Meta, StoryObj } from "@storybook/react";
import Dropzone, { DropzoneProps } from "./Dropzone";

const meta = {
  component: Dropzone,
  title: "Atoms/IconButton",
} satisfies Meta<typeof Dropzone>;
export default meta;
type Story = StoryObj<typeof Dropzone>;

export const InputText: Story = {
  args: {
    height: "500px",
  },
};
