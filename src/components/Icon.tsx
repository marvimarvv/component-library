import { type FC, type SVGProps } from "react";
import { cva } from "class-variance-authority";
import { useTheme } from "./ThemeProvider";

type SvgComponent = FC<SVGProps<SVGSVGElement>>;

interface IconProps extends SVGProps<SVGSVGElement> {
  filledIcon: SvgComponent;
  roundIcon: SvgComponent;
  size?: string;
  className?: string;
}

const iconStyles = cva("fill-current", {
  variants: {
    theme: {
      "gradient-theme": "",
      "neon-theme": "",
    },
  },
  defaultVariants: {
    theme: "gradient-theme",
  },
});

export default function Icon({
  filledIcon: FilledIcon,
  roundIcon: RoundIcon,
  size,
  className,
  viewBox = "0 0 24 24",
  ...props
}: IconProps) {
  const themeContext = useTheme() as unknown as {
    theme: "gradient-theme" | "neon-theme";
  } | null;
  const theme = themeContext?.theme;

  const SelectedIcon = theme === "neon-theme" ? FilledIcon : RoundIcon;

  return (
    <SelectedIcon
      viewBox={viewBox}
      {...props}
      {...(size && { width: size, height: size })}
      className={`${iconStyles({ theme })}${className ? ` ${className}` : ""}`}
    />
  );
}
