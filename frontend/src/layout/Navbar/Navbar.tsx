import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "@heroicons/react/solid";
import DropdownMenu from "@/components/DropdownMenu";
import A from "@/components/A";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import {
  dropdownMenuItems1,
  dropdownMenuItems2,
  navbarLinks1,
  navbarLinks2,
} from "../data/navbar";
import { ThemeContext } from "@/contexts/ThemeContext";
import { AuthContext } from "@/contexts/AuthContext";

const Navbar: React.FC = () => {
  const { authValues } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { width } = useWindowDimensions();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <nav className="top-0 left-0 z-40 flex w-full min-w-[300px] items-center justify-between bg-white py-3 px-4 shadow-md dark:bg-dark-primary sm:relative sm:py-2">
      <Link to="/" className="mr-2 text-lg">
        حِلَق
      </Link>
      <div className="flex h-full items-center">
        <button
          onClick={() => setIsMenuVisible(true)}
          className="icon-button block sm:hidden"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
        <div
          data-testid="nav-menu"
          className={`absolute left-0 bottom-0 top-0 z-50 flex flex-col items-start gap-x-8 gap-y-7 bg-white px-8 pb-6 pt-5 pl-12 shadow-md transition dark:bg-dark-primary sm:static sm:h-12 sm:flex-row sm:items-center sm:bg-none sm:p-0 sm:shadow-none ${
            isMenuVisible ? "translate-x-0" : "-translate-x-full"
          } ${
            width > 640 ? "w-auto" : width > 425 ? "w-72" : "w-full"
          } sm:translate-x-0`}
        >
          <button
            onClick={() => setIsMenuVisible(false)}
            className="icon-button absolute top-5 left-5 block sm:hidden"
          >
            <XIcon className="h-7 w-7" />
          </button>
          <button
            className="icon-button ml-0 -mb-3 p-2 sm:-ml-2 sm:mb-0"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <MoonIcon className="h-5 w-5" />
            ) : (
              <SunIcon className="h-5 w-5" />
            )}
          </button>
          <div
            className={width > 640 ? "v-divider" : "h-divider my-2 w-[75%]"}
            style={{
              margin: `0 ${width > 640 ? "-0.25rem" : "0"}`,
            }}
          />
          {authValues.isAuth
            ? navbarLinks2.map((link, index) => (
                <A
                  key={index}
                  href={`${link.url}${
                    authValues.data?.helak && link.url === "/halaka"
                      ? `?id=${authValues.data?.helak[0]?.id}`
                      : ""
                  }`}
                  navLink
                  className="text-[.8rem]"
                >
                  {link.text}
                </A>
              ))
            : navbarLinks1.map((link, index) => (
                <A key={index} href={link.url} navLink className="text-[.8rem]">
                  {link.text}
                </A>
              ))}

          <DropdownMenu
            button="حسابي"
            items={authValues.isAuth ? dropdownMenuItems2 : dropdownMenuItems1}
          />
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
