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
  "fixed top-6 left-6 z-20 flex size-10 items-center justify-center rounded-theme focus:outline-hidden focus-visible:outline-solid";

const hamburgerIconStyles = "relative";

const hamburgerBarStyles =
  "mb-1.5 h-1 w-8 rounded-theme bg-background-contrast";

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

const closeButtonStyles =
  "fixed left-6 top-6 z-20 size-10 aspect-square text-fluid-xl";

const closeBarTopStyles =
  "absolute h-1 w-8 origin-center rounded-theme top-1/2 -translate-y-1/2 bg-primary-500-contrast rotate-45";

const closeBarBottomStyles =
  "absolute h-1 w-8 origin-center rounded-theme top-1/2 -translate-y-1/2 bg-primary-500-contrast -rotate-45";

const navStyles = "fixed inset-0 grid place-items-center";

const navLinksStyles = "flex flex-col items-center justify-center gap-4";

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
        <div className={hamburgerIconStyles}>
          <div className={hamburgerBarStyles} />
          <div className={hamburgerBarStyles} />
          <div className={hamburgerBarStyles} />
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
          className={closeButtonStyles}
          onClick={close}
          aria-label="Close navigation"
        >
          <div className={closeBarTopStyles} />
          <div className={closeBarBottomStyles} />
        </button>

        <nav className={navStyles}>
          <div className={navLinksStyles}>
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
