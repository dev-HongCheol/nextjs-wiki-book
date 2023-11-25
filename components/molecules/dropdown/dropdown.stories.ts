import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta = {
  title: "molecules/dropdwon",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: {
        type: "array",
      },
      description: "드롭다운 선택자",
    },
    hasError: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    placehoder: {
      control: {
        type: "text",
      },
    },
    value: {
      control: {
        type: "string",
      },
    },
    onChange: {},
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DropdownStories: Story = {
  args: {
    options: [
      { value: null, label: "" },
      { value: "one", label: "One" },
      { value: "two", label: "Two" },
      { value: "three", label: "Three" },
    ],
    placehoder: "please select itmes from the list",
  },
};
