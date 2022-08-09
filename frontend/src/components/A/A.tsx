import React from "react";
import { Link, NavLink } from "react-router-dom";

export interface AnchorProps {
  children: React.ReactNode;
  href: string;
  navLink?: boolean;
}

const A: React.FC<AnchorProps> = ({ children, href, navLink = false }) => {
  if (navLink)
    return (
      <NavLink
        to={href}
        className={({ isActive }) =>
          `text-[.8rem] hover:underline capitalize ${
            isActive ? "font-semibold" : ""
          }`
        }
      >
        {children}
      </NavLink>
    );
  return (
    <Link to={href} className="text-[.8rem] hover:underline capitalize">
      {children}
    </Link>
  );
};

export default A;
