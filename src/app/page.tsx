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
    <main
      className="flex min-h-screen flex-col justify-between p-24 bg-skin-background"
      style={{
        backgroundImage:
          "radial-gradient(at 8% 44%, hsla(204,86%,69%,1) 0px, transparent 50%), radial-gradient(at 70% 74%, hsla(37,96%,74%,1) 0px, transparent 50%), radial-gradient(at 3% 18%, hsla(308,75%,62%,1) 0px, transparent 50%), radial-gradient(at 34% 7%, hsla(222,85%,65%,1) 0px, transparent 50%), radial-gradient(at 75% 13%, hsla(257,85%,71%,1) 0px, transparent 50%), radial-gradient(at 58% 39%, hsla(264,98%,69%,1) 0px, transparent 50%), radial-gradient(at 37% 55%, hsla(264,67%,74%,1) 0px, transparent 50%);",
      }}
    >
      <MobileNav
        links={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        backgroundColor="skin-primary-500"
      />
      <h1 className="flex flex-col">
        <span
          className={`text-fluid-3xl md:text-[170px] text-skin-primary-500 ${
            theme === "gradient-theme"
              ? "text-transparent bg-clip-text bg-gradient-to-br from-skin-primary-100 via-skin-primary-500 to-skin-primary-100"
              : ""
          }`}
        >
          Welcome
        </span>
        <span className="text-fluid-l text-skin-on-background">
          to my component library
        </span>
      </h1>
      <motion.div
        className="flex gap-space-m"
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: {
            opacity: 1,
            scale: 1,
            transition: { staggerChildren: 0.5 },
          },
        }}
      >
        <motion.div
          variants={{
            initial: { opacity: 0, scale: 0 },
            animate: { opacity: 1, scale: 1 },
          }}
        >
          <Button intent="primary" label="Button" />
        </motion.div>
        <motion.div
          variants={{
            initial: { opacity: 0, scale: 0 },
            animate: { opacity: 1, scale: 1 },
          }}
        >
          <Button intent="secondary" label="Button" />
        </motion.div>
      </motion.div>
      <ThemeToggle />
      <ModeToggle />
    </main>
  );
}
