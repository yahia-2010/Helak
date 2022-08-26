import React from "react";
import ListItem, { ListItemInterface } from "./ListItem";

export interface ListPropsInterface {
  items: ListItemInterface[];
  label?: string;
  className?: string;
  itemClassName?: string;
  itemBg?: {
    light?: { default?: "white" | "gray"; hover?: "white" | "gray" };
    dark?: {
      default?: "primary" | "secondary";
      hover?: "primary" | "secondary";
    };
  };
}

const List: React.FC<ListPropsInterface> = ({
  items,
  label,
  className,
  itemClassName,
  itemBg,
}) => {
  return (
    <div className={`${className}`}>
      {label && <span className="text-lg">{label}</span>}
      <div
        className={`shadow-hover mt-2 rounded bg-white shadow-md dark:bg-dark-secondary`}
      >
        {items.map((item, index) => (
          <>
            <ListItem
              key={index}
              {...item}
              className={`${itemClassName} ${items.length === 1 && "rounded"}`}
              lightBg={itemBg?.light}
              darkBg={itemBg?.dark}
            />
            <div className="h-divider last:hidden" />
          </>
        ))}
      </div>
    </div>
  );
};

export default List;
