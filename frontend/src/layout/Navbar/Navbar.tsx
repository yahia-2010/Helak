import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/solid";
import DropdownMenu from "@/components/DropdownMenu";
import A from "@/components/A";
import { dropdownMenuItems, navbarLinks } from "../data/navbar";

const Navbar: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <nav className="relative top-0 left-0 z-20 flex w-full min-w-[300px] items-center justify-between bg-white py-3 px-4 shadow-md dark:bg-dark-primary">
      <Link to="/" className="mr-2 text-lg">
        حِلَق
      </Link>
      <div className="flex h-full items-center">
        <button
          onClick={() => setIsMenuVisible(!isMenuVisible)}
          className="block rounded bg-white transition hover:bg-gray-100 dark:bg-dark-primary dark:hover:bg-dark-secondary sm:hidden"
        >
          <MenuIcon className="h-6" />
        </button>
        <div
          data-testid="nav-menu"
          className={`absolute left-0 bottom-0 top-12 z-20 flex w-full flex-col items-start gap-x-8 gap-y-7 bg-white py-6 px-8 pl-12 shadow-md transition dark:bg-dark-primary sm:static sm:h-auto sm:flex-row sm:items-center sm:bg-none sm:p-0 sm:shadow-none xs:w-auto ${
            isMenuVisible ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0`}
        >
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
      </div>
    </nav>
  );
};

export default Navbar;
