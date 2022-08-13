import React from "react";
import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";

export interface SelectProps {
  selections: string[];
  handleSelect: (value: string) => void;
  value: string;
  label: string;
  [x: string]: any;
}

const Select: React.FC<SelectProps> = ({
  selections,
  handleSelect,
  value,
  label,
  ...rest
}) => {
  return (
    <div
      className={`${rest.className} relative flex w-full flex-col gap-y-1`}
      {...rest}
    >
      <label className="text-[.85rem]">{label}</label>
      <Listbox value={value} onChange={handleSelect}>
        <Listbox.Button className="relative w-full rounded bg-gray-100 px-2 py-[.4rem] text-start text-[.85rem] dark:bg-dark-secondary">
          <span className="border-0 capitalize">{value}</span>
          <span className="absolute left-[.35rem] top-1/2 -translate-y-1/2">
            <SelectorIcon className="h-5 w-5" />
          </span>
        </Listbox.Button>
        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 -translate-y-1"
          enterTo="transform opacity-100 translate-0"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 translate-0"
          leaveTo="transform opacity-0 -translate-y-1"
        >
          <Listbox.Options className="thin-scroll absolute top-[130%] right-0 z-50 flex max-h-44 w-full flex-col gap-y-1 overflow-y-scroll rounded bg-white py-2 px-3 shadow-md dark:bg-dark-primary xs:left-0 xs:right-auto">
            {selections.map((selection, index) => (
              <Listbox.Option key={index} value={selection} as={React.Fragment}>
                {({ active, selected }) => (
                  <span
                    className={`flex cursor-pointer items-center whitespace-nowrap rounded py-2 px-3 text-right text-sm capitalize ${
                      (selected || active) &&
                      "bg-gray-100 dark:bg-dark-secondary"
                    }`}
                  >
                    {selection}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};

export default Select;
