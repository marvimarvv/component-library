import { useEffect, useRef } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs/blocks";

import { Tooltip } from "./Tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Built on the native [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) and [CSS Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning) (most features of it are Baseline 2026, the remaining one will become so as well because they are part of Interop 2026)",
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <BaselineStatusWidget featureId="anchor-positioning" />
          <BaselineStatusWidget featureId="popover" />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
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

const BaselineStatusWidget = ({ featureId }: { featureId: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!document.querySelector('script[src*="baseline-status"]')) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/baseline-status@1/baseline-status.min.js";
      script.type = "module";
      document.head.appendChild(script);
    }

    if (containerRef.current && !containerRef.current.firstChild) {
      const el = document.createElement("baseline-status");
      el.setAttribute("featureId", featureId);
      containerRef.current.appendChild(el);
    }
  }, [featureId]);

  return (
    <div
      ref={containerRef}
      style={{
        background: "#f8f9fa",
        borderRadius: "8px",
        padding: "12px 16px",
        marginBottom: "12px",
      }}
    />
  );
};

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
