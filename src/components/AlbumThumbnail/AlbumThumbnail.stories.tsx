import type { Meta, StoryObj } from "@storybook/react";
import AlbumThumbnail from "./AlbumThumbnail";
import { Header } from "../Header";

const meta: Meta<typeof AlbumThumbnail> = {
  title: "Components/AlbumThumbnail",
  component: AlbumThumbnail,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        <Header />
        <Story />
        <Story />
      </>
    ),
  ],
  argTypes: {
    isLiked: {
      control: { type: "boolean" },
    },
    likes: {
      control: { type: "number" },
    },
    comments: {
      control: { type: "number" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl:
      "https://images.unsplash.com/photo-1754152728457-902f155ebcae?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Exploring Japan",
    author: {
      name: "John Doe",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      username: "johndoe",
    },
    likes: 42,
    comments: 8,
    isLiked: false,
    date: "2023-10-01T12:00:00Z",
    endDate: "2023-10-15T12:00:00Z",
    location: "Tokyo, Japan",
    photoCount: 12,
    onLike: () => console.log("Liked!"),
    onComment: () => console.log("Comment clicked!"),
  },
};

export const Liked: Story = {
  args: {
    ...Default.args,
    isLiked: true,
    likes: 43,
  },
};

export const HighEngagement: Story = {
  args: {
    ...Default.args,
    likes: 1337,
    comments: 256,
    title: "Amazing Photography Work",
  },
};
