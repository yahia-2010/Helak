import React from "react";

export interface FloatingButtonProps {
  icon: React.ReactNode;
  action: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ icon, action }) => {
  return (
    <button
      onClick={() => action()}
      className="center absolute right-12 bottom-12 flex aspect-square rounded-full bg-white p-2.5 shadow-md transition hover:shadow-lg active:shadow-md dark:bg-dark-primary"
    >
      {icon}
    </button>
  );
};

export default FloatingButton;
