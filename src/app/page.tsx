"use client";

import Button from "../components/Button";
import MobileNav from "@/components/MobileNav";
import ModeToggle from "@/components/ModeToggle";
import ThemeToggle from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function Home() {
  const { theme } = useTheme() || ({} as { theme: string });

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div
        className={`flex h-screen flex-col justify-between p-space-m-l bg-skin-background snap-start ${
          theme === "gradient-theme" ? "gradient-theme-hero-bg" : ""
        }`}
      >
        <MobileNav
          links={[
            { label: "Start", href: "/" },
            { label: "Buttons", href: "/#buttons" },
            { label: "Mobile Menu", href: "/#mobile-menu" },
          ]}
          backgroundColor="skin-primary-500"
        />
        <motion.h1
          className="flex flex-col"
          initial="inital"
          animate="animate"
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.span
            variants={{
              inital: { opacity: 0, y: 100 },
              animate: {
                opacity: 1,

                y: 0,
                transition: { duration: 1 },
              },
            }}
            className={`text-fluid-3xl md:text-[170px] text-skin-primary-500 ${
              theme === "gradient-theme"
                ? "text-transparent bg-clip-text bg-gradient-to-br from-skin-primary-100 via-skin-primary-500 to-skin-primary-100"
                : ""
            }`}
          >
            Welcome
          </motion.span>
          <motion.span
            variants={{
              inital: { opacity: 0, y: 100 },
              animate: {
                opacity: 1,

                y: 0,
                originY: 0.5,
                transition: { duration: 1 },
              },
            }}
            className="text-fluid-l text-skin-on-background"
          >
            to my component library
          </motion.span>
        </motion.h1>
        <ThemeToggle />
        <ModeToggle />
      </div>
      <div
        id="buttons"
        className="h-screen snap-start bg-skin-primary-900"
      ></div>
      <div
        id="mobile-menu"
        className="h-screen snap-start bg-skin-primary-300"
      ></div>
    </main>
  );
}
