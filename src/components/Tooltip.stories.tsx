import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";

import { Tooltip } from "./Tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: false },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const Trigger = ({ text }: { text: string }) => (
  <span className="underline decoration-dotted underline-offset-4 text-fluid-s">
    {text}
  </span>
);

/** Default tooltip — hover or focus the underlined text. */
export const Top: Story = {
  args: {
    label: "Tooltips use the native popover API",
    side: "top",
  },
  render: (args) => (
    <Tooltip {...args}>
      <Trigger text="Hover me (top)" />
    </Tooltip>
  ),
};

export const Bottom: Story = {
  args: {
    label: "Anchored below the trigger",
    side: "bottom",
  },
  render: (args) => (
    <Tooltip {...args}>
      <Trigger text="Hover me (bottom)" />
    </Tooltip>
  ),
};

export const Left: Story = {
  args: {
    label: "Anchored to the left",
    side: "left",
  },
  render: (args) => (
    <Tooltip {...args}>
      <Trigger text="Hover me (left)" />
    </Tooltip>
  ),
};

export const Right: Story = {
  args: {
    label: "Anchored to the right",
    side: "right",
  },
  render: (args) => (
    <Tooltip {...args}>
      <Trigger text="Hover me (right)" />
    </Tooltip>
  ),
};

/** Long content wraps naturally inside the tooltip. */
export const LongLabel: Story = {
  args: {
    label:
      "Tooltips animate in and out using @starting-style and transition-behavior: allow-discrete — no JS animation logic required.",
    side: "top",
  },
  render: (args) => (
    <Tooltip {...args}>
      <Trigger text="Hover for a longer message" />
    </Tooltip>
  ),
};
