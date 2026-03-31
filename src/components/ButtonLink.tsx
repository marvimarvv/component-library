"use client";

import NextLink from "next/link";
import { useTheme } from "./ThemeProvider";
import { buttonStyles } from "./Button";

interface ButtonLinkProps {
  intent?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  label: string;
  fullWidth?: boolean;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export const ButtonLink = ({
  intent,
  size,
  label,
  fullWidth,
  href,
  target,
}: ButtonLinkProps) => {
  const { theme } = useTheme() as unknown as {
    theme: "gradient-theme" | "neon-theme" | null | undefined;
  };

  return (
    <NextLink
      href={href}
      target={target}
      className={buttonStyles({
        intent,
        fullWidth,
        theme,
        size,
      })}
    >
      {label}
    </NextLink>
  );
};

export default ButtonLink;
