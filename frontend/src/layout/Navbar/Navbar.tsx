import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import DropdownMenu from "@/components/DropdownMenu";
import A from "@/components/A";
import { dropdownMenuItems, navbarLinks } from "../data/navbar";
import { Transition } from "@headlessui/react";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const Navbar: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { width } = useWindowDimensions();

  return (
    <nav className="static top-0 left-0 z-40 flex w-full min-w-[300px] items-center justify-between bg-white py-3 px-4 shadow-md dark:bg-dark-primary sm:relative">
      <Link to="/" className="mr-2 text-lg">
        حِلَق
      </Link>
      <div className="flex h-full items-center">
        <button
          onClick={() => setIsMenuVisible(true)}
          className="block rounded bg-white transition hover:bg-gray-100 dark:bg-dark-primary dark:hover:bg-dark-secondary sm:hidden"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
        <div
          data-testid="nav-menu"
          className={`absolute left-0 bottom-0 top-0 z-50 flex flex-col items-start gap-x-8 gap-y-7 bg-white py-6 px-8 pl-12 shadow-md transition dark:bg-dark-primary sm:static sm:h-auto sm:flex-row sm:items-center sm:bg-none sm:p-0 sm:shadow-none ${
            isMenuVisible ? "translate-x-0" : "-translate-x-full"
          } ${
            width > 640 ? "w-auto" : width > 425 ? "w-72" : "w-full"
          } sm:translate-x-0`}
        >
          <button
            onClick={() => setIsMenuVisible(false)}
            className="absolute top-5 left-5 block rounded bg-white transition hover:bg-gray-100 dark:bg-dark-primary dark:hover:bg-dark-secondary sm:hidden"
          >
            <XIcon className="h-7 w-7" />
          </button>
          {navbarLinks.map((link, index) => (
            <A
              key={index}
              href={link.url}
              navLink={true}
              className="text-[.8rem]"
            >
              {link.text}
            </A>
          ))}

          <DropdownMenu button="حسابي" items={dropdownMenuItems} />
        </div>
        <Transition
          show={isMenuVisible}
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 z-[45] bg-black bg-opacity-25"
            onClick={() => setIsMenuVisible(false)}
          />
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;
