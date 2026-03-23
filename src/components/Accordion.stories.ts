import type { Meta, StoryObj } from "@storybook/nextjs";
import { Accordion } from "./Accordion";
import accessibilityImg from "../stories/assets/accessibility.png";
import stylingImg from "../stories/assets/styling.png";
import themingImg from "../stories/assets/theming.png";
import testingImg from "../stories/assets/testing.png";

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
      { details: "First item details", summary: "First Item" },
      { details: "Second item details", summary: "Second Item" },
      { details: "Third item details", summary: "Third Item" },
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

export const OnlyOneItemOpenWithImages: Story = {
  args: {
    onlyOneItemOpen: true,
    accordionEntries: [
      { details: "First item details", summary: "First Item" },
      { details: "Second item details", summary: "Second Item" },
      { details: "Third item details", summary: "Third Item" },
    ],
    withImages: {
      images: [accessibilityImg.src, stylingImg.src, themingImg.src],
      fallbackImage: testingImg.src,
    },
  },
};
