import "../src/app/globals.css";

import type { Decorator, StoryContext } from "@storybook/react";

import { DotGothic16, Figtree } from "next/font/google";
import type { Preview } from "@storybook/nextjs";
import { ThemeProvider } from "../src/components/ThemeProvider";
import { useEffect } from "react";

const dotGothic16 = DotGothic16({ weight: "400", subsets: ["latin"] });
const figtree = Figtree({ weight: "variable", subsets: ["latin"] });

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    toolbar: {
      icon: "paintbrush",
      // Array of item IDs to display in the toolbar, and order of appearance.
      items: ["gradient light", "gradient dark", "neon light", "neon dark"],
      // Property that specifies if the name of the item should be displayed.
      showName: true,
    },
  },
};

const withThemeContext: Decorator = (Story, context: StoryContext) => {
  const theme = context.globals.theme as keyof typeof themeClassMap;

  // Map the theme name to the corresponding class
  const themeClassMap = {
    "gradient light": "gradient-theme light",
    "gradient dark": "gradient-theme dark",
    "neon light": "neon-theme light",
    "neon dark": "neon-theme dark",
  };
  const themeClass = themeClassMap[theme];

  let backgroundColor = "white";

  if (theme === "gradient dark") {
    backgroundColor = "hsl(0,0%,15%)";
  } else if (theme === "neon dark") {
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

  const fontClass = theme?.startsWith("gradient")
    ? figtree.className
    : dotGothic16.className;

  return (
    <ThemeProvider>
      <div className={`${themeClass} ${fontClass}`} style={{ padding: "3rem" }}>
        <Story />
      </div>
    </ThemeProvider>
  );
};

const preview: Preview = {
  initialGlobals: {
    theme: "gradient light",
  },
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
