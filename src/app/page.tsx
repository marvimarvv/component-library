"use client";

import Button from "../components/Button";
import MobileNav from "@/components/MobileNav";
import ThemeToggle from "@/components/ThemeToggle";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24 bg-skin-background">
      <MobileNav
        links={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        backgroundColor="skin-primary-500"
      />
      <h1 className="flex flex-col">
        <span className="text-fluid-3xl md:text-[170px] text-skin-primary-500">
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
    </main>
  );
}
