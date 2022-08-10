/* eslint-disable react/prop-types */
import React from "react";

export interface ButtobProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  [x: string]: any;
}

const Button: React.FC<ButtobProps> = (props) => {
  const { children } = props;
  const variant = props.variant || "primary";

  return (
    <button
      {...props}
      className={`${
        (props as any).className
      } rounded px-4 py-2 capitalize transition duration-200 disabled:bg-gray-100 disabled:text-dark-primary disabled:opacity-75 disabled:shadow-none ${
        variant === "primary"
          ? "bg-color-primary text-white shadow-md hover:shadow-lg active:shadow-md dark:bg-dark-secondary"
          : variant === "secondary"
          ? "border-2 border-color-primary hover:bg-color-primary hover:text-white active:bg-transparent active:text-dark-primary dark:border-dark-secondary dark:text-white dark:hover:bg-dark-secondary dark:active:bg-transparent"
          : "hover:bg-gray-100 active:bg-transparent dark:text-white dark:hover:bg-dark-secondary dark:active:bg-transparent"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
