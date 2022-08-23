import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export interface CollapsePropsInterface {
  title: string;
  content: string;
  className?: string;
}

const Collapse: React.FC<CollapsePropsInterface> = ({
  title,
  content,
  className = "",
}) => {
  return (
    <Disclosure
      as="div"
      className={`${className} shadow-hover rounded-md bg-white dark:bg-dark-secondary`}
    >
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between px-5 py-3 text-sm capitalize">
            <span>{title}</span>
            <ChevronUpIcon
              className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
            />
          </Disclosure.Button>

          <Disclosure.Panel className="px-5 pb-3 text-sm text-gray-500 dark:text-gray-300">
            {content}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Collapse;
