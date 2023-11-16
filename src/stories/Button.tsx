import { useEffect, useState } from "react";

import { cva } from "class-variance-authority";

interface ButtonProps {
  /** You can also describe what a prop does and it'll show up in Storybook autodocs */
  intent: "primary" | "secondary";
  backgroundColor?: string;
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
        primary: "text-skin-base border-none",
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
      isGradientTheme: {
        true: "gradient-button-hover-effect bg-gradient-to-br from-skin-primary-100 via-skin-primary-500 to-skin-primary-100 active:shadow-skin-primary-100 active:shadow-xl active:transition-shadow",
      },
      isNeonTheme: {
        true: "active-button-shift after:transition-all after:duration-150 active:translate-x-2 bg-skin-primary-500 relative transition-all duration-150 after:absolute after:h-full after:w-[10%] after:right-[-9%] after:bottom-[-10%] after:bg-skin-primary-700 after:skew-y-[45deg] before:absolute before:left-[4%] before:bottom-[-20%] before:w-full before:h-[20%] before:skew-x-[45deg] before:bg-skin-primary-900 before:transition-all before:duration-150 active:translate-y-2",
      },
    },
    compoundVariants: [
      {
        intent: "secondary",
        isGradientTheme: true,
        class:
          "relative text-transparent bg-clip-text before:bg-gradient-to-br before:from-skin-primary-100 before:to-skin-primary-500 before:absolute before:inset-0 before:rounded-skin before:-z-20 after:absolute after:inset-1 after:bg-white after:-z-10 after:rounded-skin",
      },
      {
        intent: "secondary",
        isNeonTheme: true,
        class: "",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
      isGradientTheme: true,
    },
  }
);

/**  This is some comment that will show up in the docs */
export const Button = ({
  intent,
  size,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const [isGradientTheme, setIsGradientTheme] = useState(false);
  const [isNeonTheme, setIsNeonTheme] = useState(false);
  const fullWidth = props.fullWidth || false;

  /* Use the MutationObserver API to detect changes in the class attribute of the <html> element,
     otherwise Storybook doesn't render it correctly */
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          setIsGradientTheme(
            document.documentElement.classList.contains("gradient-theme")
          );
          setIsNeonTheme(
            document.documentElement.classList.contains("neon-theme")
          );
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);
  return (
    <button
      type="button"
      className={buttonStyles({
        intent,
        fullWidth,
        size,
        isGradientTheme,
        isNeonTheme,
      })}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
