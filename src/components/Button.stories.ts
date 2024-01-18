import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*   argTypes: {
    backgroundColor: { control: "color" },
  }, */
} satisfies Meta<typeof Button>;

// Make sure to export the meta object as the default export and the component as a named export
export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// Make sure to export every story you want to include in the docs
/**  This is some comment that will show up in the docs */
export const Primary: Story = {
  // Args are like the types your component has
  args: {
    intent: "primary",
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    intent: "secondary",
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const FullWidth: Story = {
  args: {
    intent: "primary",
    label: "Button",
    fullWidth: true,
  },
  parameters: {
    layout: "fullscreen",
  },
};
