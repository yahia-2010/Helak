import React from "react";

export interface FloatingButtonProps {
  icon: React.ReactNode;
  action: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ icon, action }) => {
  return (
    <button
      onClick={() => action()}
      className="absolute right-12 bottom-12 rounded-full aspect-square flex center p-2.5 shadow-md bg-white dark:bg-dark-primary dark:text-white transition hover:shadow-lg active:shadow-md"
    >
      {icon}
    </button>
  );
};

export default FloatingButton;
