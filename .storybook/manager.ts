import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Marvimarvv's Component Library",
    brandUrl: "/",
    brandTarget: "_self",
  }),
});
