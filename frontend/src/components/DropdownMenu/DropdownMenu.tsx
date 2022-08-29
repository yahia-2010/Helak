import React from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

interface DropdownMenuItem {
  text: string;
  url?: string;
  warning?: boolean;
  action?: (text: string) => void;
}

export interface DropdownMenuProps {
  items: DropdownMenuItem[];
  button: string;
  label?: string;
  menuClassName?: string;
  menuItemClassName?: string;
  buttonClasses?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  button,
  label,
  menuClassName = "",
  menuItemClassName = "",
  buttonClasses = "",
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-y-1">
      {label && (
        <label className="whitespace-nowrap text-[.85rem]">{label}</label>
      )}
      <Menu as="div" className={`relative`}>
        <Menu.Button
          className={`${buttonClasses} flex items-center gap-x-1 whitespace-nowrap rounded bg-gray-100 p-3 text-[.8rem] dark:bg-dark-secondary`}
        >
          <span>{button}</span>
          <ChevronDownIcon className="center flex h-5 w-5" />
        </Menu.Button>
        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 -translate-y-1"
          enterTo="transform opacity-100 translate-0"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 translate-0"
          leaveTo="transform opacity-0 -translate-y-1"
        >
          <Menu.Items
            className={`${menuClassName} absolute top-[130%] right-0 z-20 flex flex-col gap-y-1 rounded bg-white py-2 px-3 shadow-md dark:bg-dark-primary xs:left-0 xs:right-auto`}
          >
            {items.map((item, index) => {
              return (
                <Menu.Item key={index}>
                  {({ active }: { active: boolean }) => (
                    <button
                      onClick={() => {
                        item.action && item.action(item.text);
                        item.url && navigate(item.url);
                      }}
                      className={`${menuItemClassName} whitespace-nowrap rounded py-2 px-3 text-right text-sm ${
                        item.warning ? "text-red-500 dark:text-red-300" : ""
                      } ${active && "bg-gray-100 dark:bg-dark-secondary"}`}
                    >
                      {item.text}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
