import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button";
import HalakaDefaultPictureTemp from "@/assets/temp/halaka-default-picture-temp.svg";

export interface CardPropsInterface {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  actions?: Action[];
  className?: string;
  bgLight?: string;
  bgDark?: string;
}

const Card: React.FC<CardPropsInterface> = ({
  title,
  description,
  image,
  url,
  actions,
  className = "",
  bgLight = "bg-white",
  bgDark = "dark:bg-dark-primary",
}) => {
  const Class = "flex flex-col rounded-lg shadow-md w-72";

  const children = (
    <>
      <img
        className={`aspect-square rounded-t-lg dark:text-dark-primary ${
          !image && "bg-gray-300 p-12 opacity-50"
        }`}
        src={image || HalakaDefaultPictureTemp}
        alt={`${title}-image`}
      />
      <div className="flex flex-col gap-y-2 p-5">
        <h2 className="text-xl">{title}</h2>
        {description && <p className="">{description}</p>}
        {actions && (
          <div className="flex items-center gap-x-3 pt-2">
            {actions.map((action, index) => {
              return (
                <Button
                  key={index}
                  variant={action.variant}
                  onClick={action.action}
                >
                  {action.text}
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );

  if (url) {
    return (
      <Link
        to={url}
        className={`${className} shadow-hover ${Class} ${bgLight} ${bgDark}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <div className={`${className} ${Class} ${bgLight} ${bgDark}`}>
      {children}
    </div>
  );
};

export default Card;
