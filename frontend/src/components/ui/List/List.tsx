import React from "react";
import ListItem, { ListItemInterface } from "./ListItem";

export interface ListPropsInterface {
  items: ListItemInterface[];
  label?: string;
  className?: string;
}

const List: React.FC<ListPropsInterface> = ({ items, label, className }) => {
  return (
    <div className="p-6">
      {label && <span className="text-lg">{label}</span>}
      <div
        className={`${className} mt-2 rounded bg-white shadow-md dark:bg-dark-secondary`}
      >
        {items.map((item, index) => (
          <>
            <ListItem key={index} {...item} />
            <div className="h-divider last:hidden" />
          </>
        ))}
      </div>
    </div>
  );
};

export default List;
