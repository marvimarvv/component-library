"use client";

import ModeToggle from "@/components/ModeSwitch";
import ThemeToggle from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { ButtonLink } from "@/components/ButtonLink";

export default function Home() {
  const { theme } = useTheme() || ({} as { theme: string });

  return (
    <main className="h-screen snap-y snap-mandatory">
      <div className="flex h-screen flex-col justify-between p-fluid-m-l snap-start">
        <div className="inset-0 absolute -z-10 bg-background"></div>
        {theme === "gradient-theme" ? (
          <>
            <div className="inset-0 absolute -z-10 gradient-theme-bg gradient-theme-bg--1"></div>
            <div className="inset-0 absolute -z-10 gradient-theme-bg gradient-theme-bg--2"></div>
            <div className="inset-0 absolute -z-10 gradient-theme-bg gradient-theme-bg--3"></div>
            <div className="inset-0 absolute -z-10 gradient-theme-bg gradient-theme-bg--4"></div>
            <div className="inset-0 absolute -z-10 gradient-theme-bg gradient-theme-bg--5"></div>
            <div className="inset-0 absolute -z-10 gradient-theme-bg gradient-theme-bg--6"></div>
            <div className="inset-0 absolute -z-10 gradient-theme-bg gradient-theme-bg--7"></div>
          </>
        ) : (
          ""
        )}
        <div className="flex flex-col justify-center h-full gap-fluid-l">
          <motion.h1
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
                  transition: { duration: 0.6 },
                },
              }}
              className="block text-fluid-3xl md:text-[170px] leading-none"
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
                  transition: { duration: 0.6 },
                },
              }}
              className="text-fluid-l text-background-contrast screen-md:pl-8"
            >
              to my component library
            </motion.span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <ButtonLink
              href="https://storybook-marvimarvv.netlify.app/"
              target="_blank"
              intent="primary"
              label="Go to Storybook"
            />
          </motion.div>
        </div>

        <ThemeToggle />
        <ModeToggle className="fixed top-fluid-m-l right-fluid-m-l" />
      </div>
    </main>
  );
}
