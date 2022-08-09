import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/solid";
import DropdownMenu from "@/components/DropdownMenu";
import A from "@/components/A";
import { dropdownMenuItems, navbarLinks } from "@/data/navbar";

const Navbar: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <nav className="w-full bg-white dark:bg-dark-primary py-3 shadow-md flex justify-between px-4 items-center min-w-[300px]">
      <Link to="/" className="text-lg">
        حِلَق
      </Link>
      <div className="h-full flex items-center">
        <button
          onClick={() => setIsMenuVisible(!isMenuVisible)}
          className="bg-white dark:bg-dark-primary rounded transition hover:bg-gray-100 dark:hover:bg-dark-secondary block sm:hidden"
        >
          <MenuIcon className="h-6" />
        </button>
        <div
          data-testid="nav-menu"
          className={`flex w-full xs:w-auto transition gap-x-8 absolute left-0 bottom-0 z-10 flex-col top-12 shadow-md py-4 px-8 gap-y-7 items-start bg-white dark:bg-dark-primary sm:static sm:h-auto sm:bg-none sm:shadow-none sm:flex-row sm:p-0 sm:items-center ${
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
