import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/solid";

const Navbar: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <nav className="w-full bg-white py-3 shadow-md flex justify-between px-4 items-center min-w-[300px]">
      <Link to="/" className="">
        مجمع حلقات التحفيظ الإلكتروني
      </Link>
      <div className="h-full flex items-center">
        <button
          onClick={() => setIsMenuVisible(!isMenuVisible)}
          className="bg-white rounded transition hover:bg-gray-100 block sm:hidden"
        >
          <MenuIcon className="h-6" />
        </button>
        <div
          className={`flex w-full xs:w-auto transition gap-x-4 absolute left-0 bottom-0 z-10 flex-col top-12 shadow-md py-4 px-5 gap-y-4 bg-white sm:static sm:h-auto sm:bg-none sm:shadow-none sm:flex-row sm:p-0 ${
            isMenuVisible ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `underline text-sm hover:no-underline ${
                isActive ? "font-semibold" : ""
              }`
            }
          >
            الصفحة الرئيسة
          </NavLink>
          <NavLink
            to="helak"
            className={({ isActive }) =>
              `underline text-sm hover:no-underline ${
                isActive ? "font-semibold" : ""
              }`
            }
          >
            حلقات التحفيظ
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              `underline text-sm hover:no-underline ${
                isActive ? "font-semibold" : ""
              }`
            }
          >
            من نحن
          </NavLink>
          <NavLink
            to="login"
            className={({ isActive }) =>
              `underline text-sm hover:no-underline ${
                isActive ? "font-semibold" : ""
              }`
            }
          >
            تسجيل الدخول
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
