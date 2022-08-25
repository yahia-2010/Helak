import React from "react";

export interface ListItemInterface {
  label: string;
  label2?: string;
  image?: string;
}

const ListItem: React.FC<ListItemInterface> = ({ label, label2, image }) => {
  return (
    <div className="flex h-12 items-center overflow-hidden p-3 transition first:rounded-t last:rounded-b hover:bg-gray-100 dark:hover:bg-dark-primary">
      {image && (
        <img src={image} alt={label} className="ml-4 aspect-square h-full" />
      )}
      <div className="flex w-1/2 items-center justify-between">
        <span className="">{label}</span>
        {label2 && <span className="">{label2}</span>}
      </div>
    </div>
  );
};

export default ListItem;
