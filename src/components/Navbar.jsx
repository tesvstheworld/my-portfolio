import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/Logo (2).png";

const navigation = [
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Track the active link

  const handleSetActiveLink = (href) => {
    setActiveLink(href);
    setMobileMenuOpen(false); // Close the menu on mobile after clicking
  };

  return (
    <header className="text-white">
      <nav
        aria-label="Global"
        className="flex items-center justify-between px-3 sm:px-6 sm:mx-2 lg:px-28  sm:py-0 "
      >
        <div className="flex lg:flex-1">
          <a
            href="/"
            className="-m-1.5 p-1.5"
            onClick={() => setActiveLink("")}
          >
            <span className="sr-only">Your Company</span>
            <img src={Logo} alt="logo" className="w-20" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleSetActiveLink(item.href)}
              className={`text-sm font-semibold leading-6 ${
                activeLink === item.href ? "text-white" : "text-customBlue2"
              } hover:text-white transition-colors duration-300`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-6 sm:px-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between mx-4">
            <a
              href="/"
              className="-m-1.5 p-1.5"
              onClick={() => handleSetActiveLink("")}
            >
              <span className="sr-only">Your Company</span>
              <img alt="Logo" src={Logo} className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleSetActiveLink(item.href)}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      activeLink === item.href
                        ? "bg-gray-100 text-customBlue2"
                        : "text-gray-900 hover:bg-gray-50"
                    } transition-colors duration-300`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
