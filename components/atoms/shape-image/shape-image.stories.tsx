import type { Meta, StoryObj } from "@storybook/react";
import { ShapeImage } from "@components/atoms";

const meta = {
  title: "Atoms/ShapeImage",
  component: ShapeImage,
  tags: ["autodocs"],
  argTypes: {
    shape: {
      defaultValue: "",
      coltrol: { type: "radio" },
      options: ["circle", "shape"],
    },
  },
} satisfies Meta<typeof ShapeImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CircleImages: Story = {
  args: {
    shape: "circle",
    imageProps: {
      src: "/iu.jpeg",
      objectFit: "cover",
      width: 150,
      height: 150,
      alt: "testImg",
    },
    className: "",
  },
};

export const ShapeImages: Story = {
  args: {
    shape: "circle",
    imageProps: { src: "/iu.jpeg", width: 50, height: 50, alt: "testImg" },
  },
};
