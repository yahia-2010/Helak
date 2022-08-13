import React from "react";
import { Link, NavLink } from "react-router-dom";

export interface AnchorProps {
  children: React.ReactNode;
  href: string;
  navLink?: boolean;
  [x: string]: any;
}

const A: React.FC<AnchorProps> = ({ children, href, navLink, ...rest }) => {
  if (navLink)
    return (
      <NavLink
        {...rest}
        to={href}
        className={({ isActive }) =>
          `${rest.className} flex capitalize hover:underline ${
            isActive ? "font-semibold" : ""
          }`
        }
      >
        {children}
      </NavLink>
    );
  return (
    <Link
      {...rest}
      to={href}
      className={`${rest.className} flex capitalize hover:underline`}
    >
      {children}
    </Link>
  );
};

export default A;
