import type { Meta, StoryObj } from "@storybook/nextjs";
import ModeToggle from "./ModeToggle";

const meta = {
  title: "Components/ModeToggle",
  component: ModeToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
} satisfies Meta<typeof ModeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomClass: Story = {
  args: {
    className: "opacity-50",
  },
};
