import { Popover, Transition } from "@headlessui/react";

import Link from "next/link";
import { MutableRefObject } from "react";

interface LinkProps {
  href: string;
  label: string;
}

interface MobileNavProps {
  className?: string;
  pageContent?: MutableRefObject<HTMLElement | null>;
  links: LinkProps[];
  backgroundColor?: string;
}

const MobileNav: React.FC<MobileNavProps> = ({
  className,
  pageContent,
  links,
  backgroundColor,
}) => {
  const hidePageContent = () => {
    const isOpen = pageContent?.current?.style.overflow === "hidden";

    if (isOpen) {
      pageContent.current!.style.overflow = "auto";
      pageContent.current!.style.height = "unset";
    } else {
      if (pageContent?.current) {
        pageContent.current.style.overflow = "hidden";
        pageContent.current!.style.height = "100vh";
      }
    }
  };

  return (
    <Popover className={className}>
      {({ open }) => (
        <>
          <Popover.Button
            className="relative z-20 text-fluid-xl focus:outline-none focus-visible:outline aspect-square"
            onClick={() => {
              hidePageContent();
            }}
          >
            <div className="relative">
              <div
                className={
                  open
                    ? `absolute top-0 h-1 w-8 origin-center -translate-y-1/2 rotate-45 rounded-full transition duration-500 ${backgroundColor}-contrast`
                    : "mb-1.5 h-1 w-8 rounded-full bg-skin-content-on-light dark:bg-skin-content-on-dark transition duration-500"
                }
              ></div>
              <div
                className={
                  open
                    ? `h-1 w-8 rounded-full transition duration-500 ${backgroundColor}-contrast`
                    : "mb-1.5 h-1 w-8 rounded-full bg-skin-content-on-light dark:bg-skin-content-on-dark transition duration-500"
                }
              ></div>
              <div
                className={
                  open
                    ? `absolute bottom-0 h-1 w-8 origin-center -translate-y-1/2 -rotate-45 rounded-full transition duration-500 ${backgroundColor}-contrast`
                    : "h-1 w-8 rounded-full bg-skin-content-on-light dark:bg-skin-content-on-dark transition duration-500"
                }
              ></div>
            </div>
          </Popover.Button>
          <Transition
            show={open}
            className="fixed inset-0 grid place-items-center"
          >
            <Transition.Child
              enter="transition duration-500 ease"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition duration-500 ease"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay
                className={`fixed inset-0 bg-skin-primary-500 ${backgroundColor}`}
              />
            </Transition.Child>
            <Popover.Panel className="fixed inset-0 grid place-items-center">
              <nav className="flex flex-col items-center justify-center gap-4">
                {links.map((link, index) => (
                  <span key={index}>
                    <Transition.Child
                      enter="transition transform duration-500 ease"
                      enterFrom="scale-50 opacity-0 -translate-x-80"
                      enterTo="scale-100 opacity-100 translate-x-0"
                      leave="transition transform duration-500 ease"
                      leaveFrom="scale-100 opacity-100 translate-x-0"
                      leaveTo="scale-0 opacity-0 -translate-x-80"
                    >
                      <Popover.Button
                        as={Link}
                        className="grow text-center text-fluid-xl"
                        href={link.href}
                      >
                        {link.label}
                      </Popover.Button>
                    </Transition.Child>
                  </span>
                ))}
              </nav>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default MobileNav;
