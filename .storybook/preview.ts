import "../src/app/globals.css";

import type { Preview, ReactRenderer } from "@storybook/react";

import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        "gradient-theme": "gradient-theme",
        "neon-theme": "neon-theme",
      },
      defaultTheme: "gradient-theme",
    }),
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
