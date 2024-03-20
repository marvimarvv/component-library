"use client";

import "./globals.css";

import { DotGothic16, Figtree } from "next/font/google";
import { ThemeProvider, useTheme } from "../components/ThemeProvider";

import type { Metadata } from "next";

const dotGothic16 = DotGothic16({ weight: "400", subsets: ["latin"] });
const figtree = Figtree({ weight: "variable", subsets: ["latin"] });

/* export const metadata: Metadata = {
  title: "Marvin's Component Library",
  description: "A collection of reusable components for Marvin's projects",
};
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme() || ({} as { theme: string }); // Set default value as empty object if useTheme() returns null

  return (
    <html lang="en">
      <body
        className={
          theme === "gradient-theme" ? figtree.className : dotGothic16.className
        }
      >
        {children}
      </body>
    </html>
  );
}
