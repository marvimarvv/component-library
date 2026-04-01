import LightIconFilled from "@material-design-icons/svg/filled/light_mode.svg";
import DarkIconFilled from "@material-design-icons/svg/filled/dark_mode.svg";
import LightIconRound from "@material-design-icons/svg/round/light_mode.svg";
import DarkIconRound from "@material-design-icons/svg/round/dark_mode.svg";
import { Switch } from "@headlessui/react";
import { cva } from "class-variance-authority";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import Icon from "./Icon";

const switchBgStyles = cva(
  "relative inline-flex h-fluid-l w-fluid-2xl shrink-0 cursor-pointer rounded-skin transition-colors duration-200 ease outline-2 outline-slate-500",
  {
    variants: {
      enabled: {
        true: "bg-primary-300",
        false: "bg-primary-900",
      },
      theme: {
        "gradient-theme": "",
        "neon-theme": "",
      },
    },
  },
);

const switchThumbStyles = cva(
  "pointer-events-none inline-flex items-center justify-center relative h-full aspect-square transform rounded-skin bg-white dark:bg-slate-700 shadow-lg ring-0 transition duration-200 ease overflow-hidden",
  {
    variants: {
      enabled: {
        true: "translate-x-full",
        false: "translate-x-0",
      },
      theme: {
        "gradient-theme": "",
        "neon-theme": "",
      },
    },
  },
);

export default function ModeToggle({ className }: { className?: string }) {
  const [enabled, setEnabled] = useState(false);
  const themeContext = useTheme();
  const { toggleMode } = (themeContext || { toggleMode: () => {} }) as {
    theme: "gradient-theme" | "neon-theme";
    toggleMode: () => void;
  };
  const theme = (
    themeContext as { theme: "gradient-theme" | "neon-theme" } | null
  )?.theme;

  return (
    <div className={className}>
      <Switch
        checked={enabled}
        onChange={(checked) => {
          toggleMode();
          setEnabled(checked);
        }}
        className={switchBgStyles({ enabled, theme })}
      >
        <span className="sr-only">Toggle dark and light mode</span>
        <span
          aria-hidden="true"
          className={switchThumbStyles({ enabled, theme })}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={enabled ? "dark" : "light"}
              initial={{ scale: 0.5, rotate: -30, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.5, rotate: 30, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-[20%]"
            >
              <Icon
                filledIcon={enabled ? DarkIconFilled : LightIconFilled}
                roundIcon={enabled ? DarkIconRound : LightIconRound}
                size="100%"
              />
            </motion.div>
          </AnimatePresence>
        </span>
      </Switch>
    </div>
  );
}
