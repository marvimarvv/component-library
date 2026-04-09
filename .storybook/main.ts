import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "storybook-addon-pseudo-states",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
  ],

  staticDirs: [{ from: "../src/storybook/assets", to: "/" }],

  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  webpackFinal: async (config) => {
    // Remove existing SVG rule so SVGR can take over
    config.module = config.module ?? { rules: [] };
    config.module.rules = (config.module.rules ?? []).map((rule) => {
      if (
        rule &&
        typeof rule === "object" &&
        "test" in rule &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg")
      ) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
export default config;
