import "../src/app/globals.css";

import type { Preview, StoryFn } from "@storybook/react";

import React from "react";
import { useEffect } from "react";
import { withThemeByClassName } from "@storybook/addon-themes";

const withBackground = (Story: StoryFn, context) => {
  const theme = context.globals.theme;
  const backgroundColor = theme.includes("dark") ? "hsl(0,0%,15%)" : "white";

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    // Set the background color for the doc stories as well
    document
      .querySelector(".docs-story")
      ?.setAttribute("style", `background-color: ${backgroundColor}`);
  }, [backgroundColor]);

  return <Story {...context} />;
};

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        "gradient light": "gradient-theme light",
        "gradient dark": "gradient-theme dark",
        "neon light": "neon-theme light",
        "neon dark": "neon-theme dark",
      },
      defaultTheme: "gradient light",
    }),
    withBackground,
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
