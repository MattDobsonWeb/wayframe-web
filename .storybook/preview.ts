import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";

import { INITIAL_VIEWPORTS } from "storybook/viewport";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    layout: "fullscreen",
  },
  initialGlobals: {
    viewport: { value: "iphone", isRotated: false },
  },
};

export default preview;
