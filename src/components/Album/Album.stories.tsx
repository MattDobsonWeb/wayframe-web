import type { Meta, StoryObj } from "@storybook/react";
import Album from "./Album";

const meta: Meta<typeof Album> = {
  title: "Components/Album",
  component: Album,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
