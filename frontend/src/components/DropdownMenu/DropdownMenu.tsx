import React from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

interface DropdownMenuItem {
  text: string;
  url?: string;
  action?: () => void;
}

export interface DropdownMenuProps {
  items: DropdownMenuItem[];
  button: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, button }) => {
  const navigate = useNavigate();

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center gap-x-1 text-[.8rem] bg-gray-100 rounded py-2 px-3">
        <span>{button}</span>
        <ChevronDownIcon className="h-5 flex items-center justify-center" />
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
        <Menu.Items className="flex flex-col gap-y-2 absolute bg-white shadow-md py-2 px-3 rounded top-[120%] right-0 xs:left-0 xs:right-auto">
          {items.map((item, index) => {
            return (
              <Menu.Item key={index}>
                {({ active }: { active: boolean }) => (
                  <button
                    onClick={() => {
                      item.action && item.action();
                      item.url && navigate(item.url);
                    }}
                    className={`text-sm rounded whitespace-nowrap py-2 px-3 ${
                      active && "bg-gray-100"
                    }`}
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
  );
};

export default DropdownMenu;
