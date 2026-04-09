import React from "react";
import { addons } from "storybook/manager-api";
import type { HashEntry } from "storybook/manager-api";
import { PaintBrushIcon } from "@storybook/icons";
import { create } from "storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Marvimarvv's Component Library",
    brandImage: "/favicon.svg",
    brandUrl: "/",
    brandTarget: "_self",
  }),
  sidebar: {
    renderLabel: (item: HashEntry) => {
      if (item.name === "Theming") {
        return (
          <span
            style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
          >
            <PaintBrushIcon />
            {item.name}
          </span>
        );
      }
    },
  },
});
