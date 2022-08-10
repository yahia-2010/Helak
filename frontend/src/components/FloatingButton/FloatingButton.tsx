/* eslint-disable react/prop-types */
import React from "react";

export interface FloatingButtonProps {
  icon: React.ReactNode;
  action: () => void;
  [x: string]: any;
}

const FloatingButton: React.FC<FloatingButtonProps> = (props) => {
  const { icon, action } = props;
  return (
    <button
      {...props}
      onClick={() => action()}
      className={`${
        (props as any).className
      } center absolute right-12 bottom-12 z-10 flex aspect-square rounded-full bg-white p-2.5 shadow-md transition hover:shadow-lg active:shadow-md dark:bg-dark-primary`}
    >
      {icon}
    </button>
  );
};

export default FloatingButton;
