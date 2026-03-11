import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const themeContext = useTheme();
  const { toggleTheme } = themeContext || { toggleTheme: () => {} };
  return (
    <button className="text-background-contrast" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}
