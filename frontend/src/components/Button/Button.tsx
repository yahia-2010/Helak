import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  [x: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  ...rest
}) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`${rest.className} rounded px-4 ${
        variant === "secondary" ? "py-2" : "py-2.5"
      } capitalize transition duration-200 disabled:bg-gray-100 disabled:text-dark-primary disabled:opacity-75 ${
        variant === "primary"
          ? "shadow-hover bg-color-primary text-white"
          : variant === "secondary"
          ? "border-2 border-color-primary hover:bg-color-primary hover:text-white active:bg-transparent active:text-dark-primary dark:active:text-white"
          : "hover:bg-gray-100 active:bg-transparent dark:text-white dark:hover:bg-dark-secondary dark:active:bg-transparent"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
