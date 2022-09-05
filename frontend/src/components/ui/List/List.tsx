import React from "react";
import ListItem, { ListItemInterface } from "./ListItem";

export interface ListPropsInterface {
  items: ListItemInterface[];
  label?: string;
  className?: string;
  itemClassName?: string;
}

const List: React.FC<ListPropsInterface> = ({
  items,
  label,
  className,
  itemClassName,
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
              className={`${itemClassName} ${
                items.length === 1 ? "rounded" : ""
              }`}
            />
            <div className="h-divider last:hidden" />
          </>
        ))}
      </div>
    </div>
  );
};

export default List;
