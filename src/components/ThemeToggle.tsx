import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();
  return (
    <button className="text-skin-on-background" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}
