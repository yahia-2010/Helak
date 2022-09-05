import A from "@/components/A";
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
}

const ListItem: React.FC<ListItemPropsInterface> = ({
  label,
  label2,
  image,
  url,
  className,
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => url && navigate(url)}
      className={`${
        className ||
        "bg-white hover:bg-gray-100 dark:bg-dark-secondary dark:hover:bg-dark-primary"
      } ${
        !url ? "cursor-default" : ""
      } relative flex h-12 w-full items-center overflow-hidden p-3 transition first-of-type:rounded-t last-of-type:rounded-b`}
    >
      {image && (
        <div
          className="absolute top-0 right-0 aspect-square h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      )}
      <div
        className={`flex w-full items-center justify-between sm:w-1/2 ${
          image ? "mr-12" : ""
        }`}
      >
        {url ? (
          <A href={url}>{label}</A>
        ) : (
          <span className="whitespace-nowrap">{label}</span>
        )}
        {label2 && <span className="whitespace-nowrap">{label2}</span>}
      </div>
    </button>
  );
};

export default ListItem;
