import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export interface CollapsePropsInterface {
  title: string;
  content: string;
}

const Collapse: React.FC<CollapsePropsInterface> = ({ title, content }) => {
  return (
    <Disclosure
      as="div"
      className="shadow-hover rounded bg-white dark:bg-dark-secondary"
    >
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between px-5 py-3 text-sm">
            <span>{title}</span>
            <ChevronUpIcon
              className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-5 py-3 text-sm text-gray-500 dark:text-gray-300">
            {content}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Collapse;
