import React from "react";
import { Link, NavLink } from "react-router-dom";

export interface AnchorProps {
  children: React.ReactNode;
  href: string;
  navLink?: boolean;
  [x: string]: any;
}

const A: React.FC<AnchorProps> = (props) => {
  const { children, href, navLink } = props;
  if (navLink)
    return (
      <NavLink
        {...props}
        to={href}
        className={({ isActive }) =>
          `hover:underline capitalize ${isActive ? "font-semibold" : ""} ${
            // eslint-disable-next-line react/prop-types
            (props as any)["className"]
          }`
        }
      >
        {children}
      </NavLink>
    );
  return (
    <Link
      {...props}
      to={href}
      className={`hover:underline capitalize ${
        // eslint-disable-next-line react/prop-types
        (props as any)["className"]
      }`}
    >
      {children}
    </Link>
  );
};

export default A;
