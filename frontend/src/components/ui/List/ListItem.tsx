import React from "react";
import { useNavigate } from "react-router-dom";

export interface ListItemInterface {
  label: string;
  label2?: string;
  image?: string;
  url?: string;
}

interface ListItemPropsInterface extends ListItemInterface {
  className?: string;
  lightBg?: { default?: "white" | "gray"; hover?: "white" | "gray" };
  darkBg?: {
    default?: "primary" | "secondary";
    hover?: "primary" | "secondary";
  };
}

const ListItem: React.FC<ListItemPropsInterface> = ({
  label,
  label2,
  image,
  url,
  className,
  lightBg = { default: "white", hover: "gray" },
  darkBg = { default: "secondary", hover: "primary" },
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => url && navigate(url)}
      className={`${className} ${!url && "cursor-default"} ${
        lightBg.default === "white" ? "bg-white" : "bg-gray-100"
      } ${
        darkBg.default === "primary"
          ? "dark:bg-dark-primary"
          : "dark:bg-dark-secondary"
      } ${lightBg.hover === "white" ? "hover:bg-white" : "hover:bg-gray-100"} ${
        darkBg.hover === "primary"
          ? "dark:hover:bg-dark-primary"
          : "dark:hover:bg-dark-secondary"
      } flex h-12 w-full items-center overflow-hidden p-3 transition first-of-type:rounded-t last-of-type:rounded-b`}
    >
      {image && (
        <img src={image} alt={label} className="ml-4 aspect-square h-full" />
      )}
      <div className="flex w-full items-center justify-between sm:w-1/2">
        <span className="whitespace-nowrap">{label}</span>
        {label2 && <span className="whitespace-nowrap">{label2}</span>}
      </div>
    </button>
  );
};

export default ListItem;
