import type { Meta, StoryObj } from "@storybook/nextjs";
import { Accordion } from "./Accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    accordionEntries: [
      { details: "Details", summary: "Accordion Item 1" },
      { details: "Details", summary: "Accordion Item 2" },
      { details: "Details", summary: "Accordion Item 3" },
    ],
    accordionImages: [
      "https://picsum.photos/150/150?random=1",
      "https://picsum.photos/150/150?random=2",
      "https://picsum.photos/150/150?random=3",
    ],
  },
};

export const SingleItem: Story = {
  args: {
    accordionEntries: [
      {
        details: "This is a single accordion item with detailed content.",
        summary: "Single Item",
      },
    ],
  },
};

export const ManyItems: Story = {
  args: {
    accordionEntries: [
      { details: "First item details", summary: "First Item" },
      { details: "Second item details", summary: "Second Item" },
      { details: "Third item details", summary: "Third Item" },
      { details: "Fourth item details", summary: "Fourth Item" },
      { details: "Fifth item details", summary: "Fifth Item" },
    ],
  },
};

export const OnlyOneItemOpenAtATime: Story = {
  args: {
    onlyOneItemOpen: true,
    accordionEntries: [
      { details: "First item details", summary: "First Item" },
      { details: "Second item details", summary: "Second Item" },
      { details: "Third item details", summary: "Third Item" },
    ],
  },
};
