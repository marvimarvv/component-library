import type { Meta, StoryObj } from "@storybook/nextjs";
import ModeSwitch from "./ModeSwitch";

const meta = {
  title: "Components/Mode Switch",
  component: ModeSwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
} satisfies Meta<typeof ModeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomClass: Story = {
  args: {
    className: "opacity-50",
  },
};
