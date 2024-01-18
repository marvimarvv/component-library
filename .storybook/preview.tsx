import "../src/app/globals.css";

import type { Preview, StoryFn } from "@storybook/react";

import React from "react";
import { ThemeProvider } from "../src/components/ThemeProvider";
import { useEffect } from "react";
import { withThemeByClassName } from "@storybook/addon-themes";

const withThemeContext = (Story: StoryFn, context) => {
  const theme = context.globals.theme;
  let backgroundColor = "white";

  if (theme.includes("gradient dark")) {
    backgroundColor = "hsl(0,0%,15%)";
  } else if (theme.includes("neon dark")) {
    backgroundColor = "hsl(0,0%,0%)";
  }

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    // Set the background color for all .docs-story elements
    document.querySelectorAll(".docs-story").forEach((el) => {
      el.setAttribute("style", `background-color: ${backgroundColor}`);
    });
  }, [backgroundColor]);

  return (
    <ThemeProvider>
      <div style={{ padding: "3rem" }}>
        <Story {...context} />
      </div>
    </ThemeProvider>
  );
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
    withThemeContext,
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
