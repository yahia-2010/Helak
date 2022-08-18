import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

export interface CardPropsInterface {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  actions?: Action[];
  className?: string;
}

const Card: React.FC<CardPropsInterface> = ({
  title,
  description,
  image,
  url,
  actions,
  className = "",
}) => {
  const Class = "flex flex-col rounded-lg shadow-md w-72";

  const children = (
    <>
      <img
        className="aspect-square rounded-t-lg bg-gray-100"
        src={image}
        alt={`${title}-image`}
      />
      <div className="flex flex-col gap-y-2 p-5">
        <h2 className="text-xl">{title}</h2>
        {description && <p className="">{description}</p>}
      </div>
      {actions && (
        <div className="">
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
    </>
  );

  if (url) {
    return (
      <Link to={url} className={`${className} shadow-hover ${Class}`}>
        {children}
      </Link>
    );
  }

  return <div className={`${className} ${Class}`}>{children}</div>;
};

export default Card;
