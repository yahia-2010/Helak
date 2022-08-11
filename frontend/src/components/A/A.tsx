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
          `${(props as any).className} flex capitalize hover:underline ${
            isActive ? "font-semibold" : ""
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
      className={`${(props as any).className} flex capitalize hover:underline`}
    >
      {children}
    </Link>
  );
};

export default A;
