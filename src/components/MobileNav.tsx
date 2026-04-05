"use client";

import { cva } from "class-variance-authority";
import Link from "next/link";
import { useRef, useState } from "react";

interface LinkProps {
  href: string;
  label: string;
}

interface MobileNavProps {
  links: LinkProps[];
}

const openButtonStyles =
  "relative z-20 flex h-10 w-10 items-center justify-center rounded-theme focus:outline-hidden focus-visible:outline-solid";

const dialogStyles = cva(
  "fixed inset-0 z-10 m-0 h-screen w-screen border-0 bg-transparent p-0 text-primary-500-contrast dark:text-primary-700-contrast",
  {
    variants: {
      state: {
        open: "animate-mobile-nav-enter",
        closing: "animate-mobile-nav-exit",
      },
    },
  },
);

const overlayStyles = "fixed inset-0 bg-primary-500 dark:bg-primary-700";

const closeBarsStyles = "absolute h-1 w-8 origin-center rounded-theme";

const linkStyles = cva("grow text-center text-fluid-xl", {
  variants: {
    state: {
      open: "animate-mobile-nav-link-enter",
      closing: "animate-mobile-nav-link-exit",
    },
  },
});

const MobileNav: React.FC<MobileNavProps> = ({ links }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  const open = () => {
    dialogRef.current?.showModal();
  };

  const close = () => {
    setIsClosing(true);
  };

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDialogElement>) => {
    if (isClosing && e.animationName === "mobile-nav-exit") {
      dialogRef.current?.close();
      setIsClosing(false);
    }
  };

  const dialogState = isClosing ? "closing" : "open";

  return (
    <>
      <button
        className={openButtonStyles}
        onClick={open}
        aria-haspopup="dialog"
        aria-label="Open navigation"
      >
        <div className="relative">
          <div className="mb-1.5 h-1 w-8 rounded-theme bg-background-contrast" />
          <div className="mb-1.5 h-1 w-8 rounded-theme bg-background-contrast" />
          <div className="h-1 w-8 rounded-theme bg-background-contrast" />
        </div>
      </button>

      <dialog
        ref={dialogRef}
        className={dialogStyles({ state: dialogState })}
        onClose={() => setIsClosing(false)}
        onAnimationEnd={handleAnimationEnd}
        aria-label="Navigation"
      >
        <div aria-hidden="true" className={overlayStyles} />
        <button
          className="absolute right-6 top-6 z-20 aspect-square text-fluid-xl focus:outline-hidden focus-visible:outline-solid"
          onClick={close}
          aria-label="Close navigation"
        >
          <div className="relative">
            <div
              className={`${closeBarsStyles} top-0 -translate-y-1/2 rotate-45`}
            />
            <div className="h-1 w-8" />
            <div
              className={`${closeBarsStyles} bottom-0 -translate-y-1/2 -rotate-45`}
            />
          </div>
        </button>

        <nav className="fixed inset-0 grid place-items-center">
          <div className="flex flex-col items-center justify-center gap-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={close}
                className={linkStyles({ state: dialogState })}
                style={{ animationDelay: `${index * 75}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </dialog>
    </>
  );
};

export default MobileNav;
