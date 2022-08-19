import React from "react";

export interface FloatingButtonProps {
  icon: React.ReactNode;
  action: () => void;
  [x: string]: any;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  icon,
  action,
  ...rest
}) => {
  return (
    <button
      {...rest}
      onClick={() => action()}
      className={`${rest.className} center shadow-hover fixed right-12 bottom-12 z-10 flex aspect-square rounded-full bg-white p-2.5 transition dark:bg-dark-primary`}
    >
      {icon}
    </button>
  );
};

export default FloatingButton;
