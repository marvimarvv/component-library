import type { Meta, StoryObj } from "@storybook/nextjs";
import { Accordion } from "./Accordion";
import image1 from "../storybook/assets/image1.jpg";
import image2 from "../storybook/assets/image2.jpg";
import image3 from "../storybook/assets/image3.jpg";
import image4 from "../storybook/assets/image4.jpg";

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

export const OneItemOpen: Story = {
  args: {
    oneItemOpen: true,
    accordionEntries: [
      { details: "First item details", summary: "First Item" },
      { details: "Second item details", summary: "Second Item" },
      { details: "Third item details", summary: "Third Item" },
    ],
  },
};

export const WithImages: Story = {
  argTypes: {
    oneItemOpen: { control: false },
  },
  args: {
    oneItemOpen: true,
    accordionEntries: [
      { details: "First item details", summary: "First Item" },
      { details: "Second item details", summary: "Second Item" },
      { details: "Third item details", summary: "Third Item" },
    ],
    withImages: {
      images: [image1.src, image2.src, image3.src],
    },
  },
};
