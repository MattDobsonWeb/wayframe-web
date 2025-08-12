import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OnDarkBackground: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#1a1a1a",
          padding: "2rem",
          borderRadius: "8px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const OnLightBackground: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "2rem",
          borderRadius: "8px",
          border: "1px solid #e9ecef",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const InNavigation: Story = {
  decorators: [
    (Story) => (
      <nav
        style={{
          backgroundColor: "#ffffff",
          padding: "1rem 2rem",
          borderBottom: "1px solid #e9ecef",
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <Story />
        <div style={{ marginLeft: "auto", display: "flex", gap: "1rem" }}>
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </nav>
    ),
  ],
};
