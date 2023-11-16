import { Popover, Transition } from "@headlessui/react";

import Link from "next/link";

export default function MobileMenu({ className, pageContent, links }) {
  const hidePageContent = () => {
    const isOpen = pageContent.current.style.overflow === "hidden";

    if (isOpen) {
      pageContent.current.style.overflow = "auto";
      pageContent.current.style.height = "unset";
    } else {
      pageContent.current.style.overflow = "hidden";
      pageContent.current.style.height = "100dvh";
    }
  };

  return (
    <Popover className={className}>
      {({ open }) => (
        <>
          <Popover.Button
            className="relative z-20 text-fluid-xl focus:outline-none focus-visible:outline"
            onClick={() => {
              hidePageContent();
            }}
          >
            <div className="relative">
              <div
                className={
                  open
                    ? "absolute top-0 h-1 w-8 origin-center -translate-y-1/2 rotate-45 rounded-full bg-white transition duration-500"
                    : "mb-1.5 h-1 w-8 rounded-full bg-white transition duration-500"
                }
              ></div>
              <div
                className={
                  open
                    ? "h-1 w-8 rounded-full bg-transparent transition duration-500"
                    : "mb-1.5 h-1 w-8 rounded-full bg-white transition duration-500"
                }
              ></div>
              <div
                className={
                  open
                    ? "absolute bottom-0 h-1 w-8 origin-center -translate-y-1/2 -rotate-45 rounded-full bg-white transition duration-500"
                    : "h-1 w-8 rounded-full bg-white transition duration-500"
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
              <Popover.Overlay className="fixed inset-0 bg-skin-primary-500" />
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
                    <Transition.Child
                      enter="transition transform duration-500 ease"
                      enterFrom="scale-50 opacity-0"
                      enterTo="scale-100 opacity-100"
                      leave="transition transform duration-500 ease"
                      leaveFrom="scale-100 opacity-100"
                      leaveTo="scale-0 opacity-0"
                    >
                      <div className="h-2 w-2 rounded-full bg-skin-primary-900"></div>
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
}
