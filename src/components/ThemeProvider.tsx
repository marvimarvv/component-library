"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("gradient-theme"); // Default theme
  const [mode, setMode] = useState("light"); // Default mode

  useEffect(() => {
    // Load theme from local storage or set default
    const savedTheme = localStorage.getItem("theme") || "gradient-theme";
    setTheme(savedTheme);

    // Check for saved mode or system preference
    const savedMode =
      localStorage.getItem("mode") ||
      (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setMode(savedMode);

    // Apply theme and mode
    document.documentElement.classList.add(savedTheme);
    document.documentElement.classList.add(savedMode);

    // Listen for changes in the preferred color scheme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const changeHandler = () => {
      setMode(mediaQuery.matches ? "dark" : "light");
      document.documentElement.className = `${savedTheme} ${
        mediaQuery.matches ? "dark" : "light"
      }`;
    };
    mediaQuery.addEventListener("change", changeHandler);

    // Clean up the event listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", changeHandler);
    };
  }, []);

  // Process the theme change event from the Strorybook preview
  useEffect(() => {
    const handleStorybookThemeChange = (event: any) => {
      // Map the dropdown options to the corresponding theme context
      const themeClassMap: { [key: string]: string } = {
        "gradient light": "gradient-theme",
        "gradient dark": "gradient-theme",
        "neon light": "neon-theme",
        "neon dark": "neon-theme",
      };
      const themeClass = themeClassMap[event.detail];

      setTheme(themeClass);
    };

    window.addEventListener("themeChange", handleStorybookThemeChange);

    return () => {
      window.removeEventListener("themeChange", handleStorybookThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme =
      theme === "gradient-theme" ? "neon-theme" : "gradient-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = `${newTheme} ${mode}`;
  };

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
    document.documentElement.className = `${theme} ${newMode}`;
  };

  return (
    <ThemeContext.Provider
      value={{ theme, mode, toggleTheme, toggleMode } as any}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
