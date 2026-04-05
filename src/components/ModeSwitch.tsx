import LightIconFilled from "@material-design-icons/svg/filled/light_mode.svg";
import DarkIconFilled from "@material-design-icons/svg/filled/dark_mode.svg";
import LightIconRound from "@material-design-icons/svg/round/light_mode.svg";
import DarkIconRound from "@material-design-icons/svg/round/dark_mode.svg";
import { cva } from "class-variance-authority";
import { useId } from "react";
import { useTheme } from "./ThemeProvider";
import Icon from "./Icon";

const switchBgStyles = cva(
  "relative inline-flex h-fluid-l w-fluid-2xl shrink-0 cursor-pointer transition-colors duration-200 ease outline-2 outline-slate-500 peer-focus-visible:outline",
  {
    variants: {
      isDark: {
        true: "bg-primary-900",
        false: "bg-primary-300",
      },
      theme: {
        "gradient-theme": "rounded-full",
        "neon-theme": "",
      },
    },
  },
);

const switchThumbStyles = cva(
  "pointer-events-none inline-flex items-center justify-center relative h-full aspect-square transform bg-white dark:bg-slate-700 shadow-lg ring-0 transition duration-200 ease overflow-hidden",
  {
    variants: {
      isDark: {
        true: "translate-x-0",
        false: "translate-x-full",
      },
      theme: {
        "gradient-theme": "rounded-full",
        "neon-theme": "",
      },
    },
  },
);

export default function ModeSwitch({ className }: { className?: string }) {
  const id = useId();
  const themeContext = useTheme();
  const { toggleMode } = (themeContext || { toggleMode: () => {} }) as {
    theme: "gradient-theme" | "neon-theme";
    toggleMode: () => void;
  };
  const theme = (
    themeContext as { theme: "gradient-theme" | "neon-theme" } | null
  )?.theme;
  const mode = (themeContext as { mode: "light" | "dark" } | null)?.mode;
  const isDark = mode === "dark";

  return (
    <div className={className}>
      <input
        type="checkbox"
        id={id}
        role="switch"
        className="peer sr-only"
        checked={isDark}
        onChange={() => toggleMode()}
      />
      <label htmlFor={id} className={switchBgStyles({ isDark, theme })}>
        <span className="sr-only">Toggle dark and light mode</span>
        <span
          aria-hidden="true"
          className={switchThumbStyles({ isDark, theme })}
        >
          <span
            className={`absolute inset-[20%] transition-[opacity,scale,rotate] duration-200 ease ${isDark ? "opacity-0 scale-50 rotate-30" : "opacity-100 scale-100 rotate-0"}`}
          >
            <Icon
              filledIcon={LightIconFilled}
              roundIcon={LightIconRound}
              size="100%"
            />
          </span>
          <span
            className={`absolute inset-[20%] transition-[opacity,scale,rotate] duration-200 ease ${isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-[-30deg]"}`}
          >
            <Icon
              filledIcon={DarkIconFilled}
              roundIcon={DarkIconRound}
              size="100%"
            />
          </span>
        </span>
      </label>
    </div>
  );
}
