/* eslint-disable react/prop-types */
import React from "react";

export interface InputProps {
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  error?: boolean;
  [x: string]: any;
}

const Input: React.FC<InputProps> = (props) => {
  const { label, type, onChange, value, error } = props;
  return (
    <div className="flex flex-col gap-y-1">
      {label && <label className="text-[.85rem]">{label}</label>}
      <input
        {...props}
        type={type}
        onChange={onChange}
        value={value}
        className={`${(props as any).className} disabled:opacity-75 ${
          error && "bg-red-100"
        } rounded border-0 bg-gray-100 px-2 py-1 text-[.85rem] dark:bg-dark-secondary`}
      />
    </div>
  );
};

export default Input;
