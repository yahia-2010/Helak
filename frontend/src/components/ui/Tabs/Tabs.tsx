import React, { useState } from "react";
import { Tab, Transition } from "@headlessui/react";

export interface TabsPropsInterface {
  tabs: React.ReactNode[];
  panels: React.ReactNode[];
  tabClassName?: string;
  selectedTabClassName?: string;
  panelClassName?: string;
  tabListClassName?: string;
  panelListClassName?: string;
}

const Tabs: React.FC<TabsPropsInterface> = ({
  tabs,
  panels,
  panelClassName,
  panelListClassName,
  tabClassName,
  tabListClassName,
  selectedTabClassName,
}) => {
  return (
    <Tab.Group>
      <Tab.List
        className={`${
          tabListClassName || "bg-gray-100 dark:bg-dark-secondary"
        } flex w-full gap-x-1.5 rounded p-1.5 xs:w-72`}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              `${`transition focus:ring-0 ${
                !selected
                  ? tabClassName || "hover:bg-white dark:hover:bg-dark-primary"
                  : ""
              }`} w-full rounded py-2.5 text-sm transition xs:text-base ${
                selected
                  ? selectedTabClassName || "bg-color-primary text-white"
                  : ""
              }`
            }
          >
            {tab}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels
        className={`${
          panelListClassName || "bg-gray-100 dark:bg-dark-secondary"
        } mt-4 min-h-[10rem] w-full rounded`}
      >
        {panels.map((panel, index) => (
          <Tab.Panel key={index} className={`${panelClassName} rounded p-5`}>
            {panel}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
