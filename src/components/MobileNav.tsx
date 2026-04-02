"use client";

import { cva } from "class-variance-authority";
import Link from "next/link";
import { useRef, useState } from "react";

interface LinkProps {
  href: string;
  label: string;
}

interface MobileNavProps {
  className?: string;
  links: LinkProps[];
  backgroundColor?:
    | "primary-100"
    | "primary-300"
    | "primary-500"
    | "primary-700"
    | "primary-900";
}

const dialogStyles = cva(
  "fixed inset-0 z-10 m-0 max-h-none max-w-none border-0 bg-transparent p-0",
  {
    variants: {
      state: {
        open: "animate-mobile-nav-enter",
        closing: "animate-mobile-nav-exit",
      },
    },
  },
);

const overlayStyles = cva("fixed inset-0", {
  variants: {
    backgroundColor: {
      "primary-100": "bg-primary-100",
      "primary-300": "bg-primary-300",
      "primary-500": "bg-primary-500",
      "primary-700": "bg-primary-700",
      "primary-900": "bg-primary-900",
    },
  },
  defaultVariants: {
    backgroundColor: "primary-500",
  },
});

const closeBarsStyles = cva("absolute h-1 w-8 origin-center rounded-skin", {
  variants: {
    backgroundColor: {
      "primary-100": "bg-primary-100-contrast",
      "primary-300": "bg-primary-300-contrast",
      "primary-500": "bg-primary-500-contrast",
      "primary-700": "bg-primary-700-contrast",
      "primary-900": "bg-primary-900-contrast",
    },
  },
  defaultVariants: {
    backgroundColor: "primary-500",
  },
});

const linkStyles = cva("grow text-center text-fluid-xl", {
  variants: {
    backgroundColor: {
      "primary-100": "text-primary-100-contrast",
      "primary-300": "text-primary-300-contrast",
      "primary-500": "text-primary-500-contrast",
      "primary-700": "text-primary-700-contrast",
      "primary-900": "text-primary-900-contrast",
    },
    state: {
      open: "animate-mobile-nav-link-enter",
      closing: "animate-mobile-nav-link-exit",
    },
  },
  defaultVariants: {
    backgroundColor: "primary-500",
  },
});

const MobileNav: React.FC<MobileNavProps> = ({
  className,
  links,
  backgroundColor,
}) => {
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
        className={`${className} relative z-20 aspect-square text-fluid-xl focus:outline-hidden focus-visible:outline-solid`}
        onClick={open}
        aria-haspopup="dialog"
        aria-label="Open navigation"
      >
        <div className="relative">
          <div className="mb-1.5 h-1 w-8 rounded-skin bg-background-contrast" />
          <div className="mb-1.5 h-1 w-8 rounded-skin bg-background-contrast" />
          <div className="h-1 w-8 rounded-skin bg-background-contrast" />
        </div>
      </button>

      <dialog
        ref={dialogRef}
        className={dialogStyles({ state: dialogState })}
        onClose={() => setIsClosing(false)}
        onAnimationEnd={handleAnimationEnd}
        aria-label="Navigation"
      >
        <div
          aria-hidden="true"
          className={overlayStyles({ backgroundColor })}
        />

        <button
          className="absolute right-6 top-6 z-20 aspect-square text-fluid-xl focus:outline-hidden focus-visible:outline-solid"
          onClick={close}
          aria-label="Close navigation"
        >
          <div className="relative">
            <div
              className={`${closeBarsStyles({ backgroundColor })} top-0 -translate-y-1/2 rotate-45`}
            />
            <div className="h-1 w-8" />
            <div
              className={`${closeBarsStyles({ backgroundColor })} bottom-0 -translate-y-1/2 -rotate-45`}
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
                className={linkStyles({ backgroundColor, state: dialogState })}
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
