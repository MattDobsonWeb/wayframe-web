import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPadding: Story = {
  decorators: [
    (Story) => (
      <div style={{ padding: "1rem" }}>
        <Story />
      </div>
    ),
  ],
};

export const OnDarkBackground: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#1a1a1a",
          padding: "1rem",
          minHeight: "100vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
