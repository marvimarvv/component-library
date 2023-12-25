"use client";

import Button from "../components/Button";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-skin-light dark:bg-skin-dark">
      <MobileNav
        links={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        backgroundColor="bg-skin-primary-500"
      />
      <Button intent="primary" label="Button" />
      <Button intent="secondary" label="Button" />
    </main>
  );
}
