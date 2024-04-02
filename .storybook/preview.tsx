import "../src/app/globals.css";

import type { Preview, StoryFn } from "@storybook/react";

import React from "react";
import { ThemeProvider } from "../src/components/ThemeProvider";
import { useEffect } from "react";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "gradient light",
    toolbar: {
      icon: "paintbrush",
      // Array of item IDs to display in the toolbar, and order of appearance.
      items: ["gradient light", "gradient dark", "neon light", "neon dark"],
      // Property that specifies if the name of the item should be displayed.
      showName: true,
    },
  },
};

const withThemeContext = (Story: StoryFn, context) => {
  const theme = context.globals.theme;

  // Map the theme name to the corresponding class
  const themeClassMap = {
    "gradient light": "gradient-theme light",
    "gradient dark": "gradient-theme dark",
    "neon light": "neon-theme light",
    "neon dark": "neon-theme dark",
  };
  const themeClass = themeClassMap[theme];

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

  // Fire a themeChange event whenever the theme changes to update the theme global context
  useEffect(() => {
    const event = new CustomEvent("themeChange", { detail: theme });
    window.dispatchEvent(event);
  }, [theme]);

  return (
    <ThemeProvider>
      <div className={themeClass} style={{ padding: "3rem" }}>
        <Story />
      </div>
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [withThemeContext],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
