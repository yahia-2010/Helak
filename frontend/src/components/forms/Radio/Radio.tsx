import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import React from "react";

export interface RadioProps {
  label?: string;
  options: string[];
  values: string[];
  value: string;
  handleSelect: (value: string) => void;
  [x: string]: any;
}

const Radio: React.FC<RadioProps> = (props) => {
  const { label, options, values, value, handleSelect } = props;

  if (values.length !== options.length) {
    return <p>values and options should have the same length</p>;
  }

  return (
    <RadioGroup
      {...props}
      value={value}
      onChange={handleSelect}
      className={`${
        (props as any).className
      } relative flex w-full flex-col gap-y-1`}
    >
      {label && (
        <RadioGroup.Label className="text-[.85rem]">{label}</RadioGroup.Label>
      )}
      <div className="flex min-w-[10rem] flex-col gap-y-2 rounded bg-gray-100 p-3 dark:bg-dark-secondary">
        {options.map((option, index) => (
          <RadioGroup.Option
            key={index}
            value={values[index]}
            as={React.Fragment}
          >
            {({ checked }) => (
              <button
                className={`flex items-center justify-between rounded px-2 py-1 text-start ${
                  checked ? "bg-color-primary text-white" : ""
                }`}
              >
                <span>{option}</span>
                {checked && <CheckIcon className="h-5 w-5" />}
              </button>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default Radio;
