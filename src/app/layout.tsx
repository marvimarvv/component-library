import "./globals.css";

import { DotGothic16 } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "../components/ThemeProvider";

const dotGothic16 = DotGothic16({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marvin's Component Library",
  description: "A collection of reusable components for Marvin's projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dotGothic16.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
