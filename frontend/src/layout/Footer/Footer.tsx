import React from "react";
import footerData from "../data/Footer";

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-white p-8 shadow-md dark:bg-dark-primary">
      <div className="center flex h-full gap-x-8">
        {footerData.icons.map((icon, index) => {
          return (
            <a
              key={index}
              href={icon.url}
              target="_blank"
              rel="noreferrer"
              className="opacity-hover-low"
            >
              <img
                src={icon.icon}
                alt={icon.name}
                className="h-[1.25rem] w-[1.25rem]"
              />
            </a>
          );
        })}
      </div>
      <p className="opacity-50">
        كل الحقوق محفوظة <span className="text-xl">&copy;</span>
      </p>
    </footer>
  );
};

export default Footer;
