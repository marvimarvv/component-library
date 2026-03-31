"use client";

import { cva } from "class-variance-authority";
import { useTheme } from "./ThemeProvider";

interface ButtonProps {
  /** You can also describe what a prop does and it'll show up in Storybook autodocs */
  intent: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  label: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

export const buttonStyles = cva(
  "w-fit pointer-cursor rounded-skin font-bold visited:no-underline focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-100 ",
  {
    variants: {
      intent: {
        primary: "text-primary-500-contrast border-none",
        secondary: "",
      },
      size: {
        small: "px-fluid-2xs py-fluid-3xs text-fluid-xs",
        medium: "px-fluid-xs py-fluid-3xs text-fluid-s",
        large: "px-fluid-s py-fluid-2xs text-fluid-m",
      },
      fullWidth: {
        true: "w-full",
      },
      theme: {
        "gradient-theme":
          "bg-linear-to-br from-primary-300 via-primary-700 to-primary-300 font-normal dark:from-primary-100 dark:via-primary-300 dark:to-primary-100 dark:text-primary-700 bg-size-[130%_150%] bg-position-[10%_top] hover:bg-position-[10%_bottom] active:shadow-[0px_3px_12px_6px_hsl(var(--color-primary-300))] dark:active:shadow-[0px_3px_12px_6px_hsl(var(--color-primary-100))] transition-[background-position,box-shadow] duration-200 ease-out before:bg-size-[130%_150%] before:bg-position-[10%_top] hover:before:bg-position-[10%_bottom] focus-visible:outline-primary-500 dark:focus-visible:outline-primary-100",
        "neon-theme":
          "isolate -translate-y-[.5em] active:after:w-[.1em] active:after:-right-[.1em] active:after:-bottom-[.1em] active:before:h-[.1em] active:before:-right-[.1em] active:before:-bottom-[.1em] active:translate-y-0 active:translate-x-[.3em] after:transition-all transition-all before:transition-all after:duration-150 bg-primary-500 relative duration-150 after:absolute after:h-full after:w-[0.5em] after:right-[-0.5em] after:bottom-[-0.25em] after:bg-primary-700 after:skew-y-45 before:absolute before:-right-[0.25em] before:-bottom-[0.5em] before:w-full before:h-[0.5em] before:skew-x-45 before:bg-primary-900 dark:before:bg-primary-700 before:duration-150 after:-z-1 before:-z-1 dark:focus-visible:outline-white focus-visible:outline-black",
      },
    },
    compoundVariants: [
      {
        intent: "secondary",
        theme: "gradient-theme",
        class:
          "relative text-transparent dark:text-transparent after bg-clip-text before:bg-linear-to-br before:from-primary-300 before:via-primary-700 before:to-primary-300 before:absolute before:inset-0 before:rounded-skin before:-z-20 after:absolute after:inset-[0.18rem] after:bg-background after:-z-10 after:rounded-skin dark:before:from-primary-100 dark:before:via-primary-300 dark:before:to-primary-100",
      },
      {
        intent: "secondary",
        theme: "neon-theme",
        class:
          "neon-theme-button-secondary-border dark:text-background-contrast bg-transparent -translate-y-[.5em] active:after:w-[.1em] active:after:-right-[.1em] active:after:-bottom-[.1em] active:before:h-[.1em] active:before:-right-[.1em] active:before:-bottom-[.1em] active:translate-y-0 active:translate-x-[.3em] after:duration-150 relative  duration-150 after:absolute after:h-full after:w-[0.5em] after:right-[-0.5em] after:bottom-[-0.25em] after:bg-primary-700 after:skew-y-45 before:absolute before:-right-[0.25em] before:-bottom-[0.5em] before:w-full before:h-[0.5em] before:skew-x-45 before:bg-primary-900 before:duration-150",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
      theme: "gradient-theme",
    },
  },
);

export const Button = ({ intent, size, label, fullWidth }: ButtonProps) => {
  const { theme } = useTheme() as unknown as {
    theme: "gradient-theme" | "neon-theme" | null | undefined;
  };

  return (
    <button
      type="button"
      className={buttonStyles({
        intent,
        fullWidth,
        theme,
        size,
      })}
    >
      {label}
    </button>
  );
};

export default Button;
