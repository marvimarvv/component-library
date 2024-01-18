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

const buttonStyles = cva(
  "pointer-cursor rounded-skin font-bold visited:no-underline focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-skin-primary-500 focus-visible:outline-offset-2",
  {
    variants: {
      intent: {
        primary: "text-skin-primary-500-contrast border-none",
        secondary: "",
      },
      size: {
        small: "px-space-2xs py-space-3xs text-fluid-xs",
        medium: "px-space-xs py-space-3xs text-fluid-s",
        large: "px-space-s py-space-2xs text-fluid-m",
      },
      fullWidth: {
        true: "w-full",
      },
      theme: {
        "gradient-theme":
          "gradient-button bg-gradient-to-br from-skin-primary-100 via-skin-primary-500 to-skin-primary-100",
        "neon-theme":
          "-translate-y-[.5em] active:after:w-[.1em] active:after:-right-[.1em] active:after:-bottom-[.1em] active:before:h-[.1em] active:before:-right-[.1em] active:before:-bottom-[.1em] active:translate-y-0 active:translate-x-[.3em] after:transition-all after:duration-150 bg-skin-primary-500 relative transition-all duration-150 after:absolute after:h-full after:w-[0.5em] after:right-[-0.5em] after:bottom-[-0.25em] after:bg-skin-primary-700 after:skew-y-[45deg] before:absolute before:-right-[0.25em] before:-bottom-[0.5em] before:w-full before:h-[0.5em] before:skew-x-[45deg] before:bg-skin-primary-900 dark:before:bg-skin-primary-700 before:transition-all before:duration-150",
      },
    },
    compoundVariants: [
      {
        intent: "secondary",
        theme: "gradient-theme",
        /*         TODO: Solve tw merge issue with text transparent not applying font-size
         */ class:
          "relative text-transparent after bg-clip-text before:bg-gradient-to-br before:from-skin-primary-100 before:via-skin-primary-500 before:to-skin-primary-100 before:absolute before:inset-0 before:rounded-skin before:-z-20 after:absolute after:inset-1 after:bg-skin-background active:after:bg-gradient-to-br active:after:from-skin-primary-500 active:after:to-skin-primary-100 active:text-skin-primary-500-contrast dark:active:text-skin-background after:-z-10 after:rounded-skin",
      },
      {
        intent: "secondary",
        theme: "neon-theme",
        class:
          "neon-button-secondary-border bg-skin-background dark:text-skin-on-background -translate-y-[.5em] active:after:w-[.1em] active:after:-right-[.1em] active:after:-bottom-[.1em] active:before:h-[.1em] active:before:-right-[.1em] active:before:-bottom-[.1em] active:translate-y-0 active:translate-x-[.3em] after:transition-all after:duration-150 relative transition-all duration-150 after:absolute after:h-full after:w-[0.5em] after:right-[-0.5em] after:bottom-[-0.25em] after:bg-skin-primary-700 after:skew-y-[45deg] before:absolute before:-right-[0.25em] before:-bottom-[0.5em] before:w-full before:h-[0.5em] before:skew-x-[45deg] before:bg-skin-primary-900 before:transition-all before:duration-150",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
      theme: "gradient-theme",
    },
  }
);

/**  This is some comment that will show up in the docs */
export const Button = ({ intent, size, label, ...props }: ButtonProps) => {
  const fullWidth = props.fullWidth || false;
  const { theme } = useTheme();

  return (
    <button
      type="button"
      className={buttonStyles({
        intent,
        fullWidth,
        theme,
        size,
      })}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
