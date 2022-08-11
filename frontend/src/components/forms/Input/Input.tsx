import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

export interface InputProps {
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  error?: boolean;
  name?: string;
  [x: string]: any;
}

const Input: React.FC<InputProps> = (props) => {
  const { label, type, onChange, value, error, name } = props;
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex flex-col gap-y-1">
      {label && <label className="text-[.85rem]">{label}</label>}
      <div className="relative">
        <input
          {...props}
          type={
            type === "password" ? (passwordVisible ? "text" : "password") : type
          }
          name={name}
          onChange={onChange}
          value={value}
          className={`${(props as any).className} w-full disabled:opacity-75 ${
            error && "bg-red-100"
          } rounded border-0 bg-gray-100 px-2 py-1 text-[.85rem] dark:bg-dark-secondary`}
        />
        {type === "password" && (
          <button
            className="absolute left-2.5 top-1/2 -translate-y-1/2"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {!passwordVisible ? (
              <EyeOffIcon className="h-4" />
            ) : (
              <EyeIcon className="h-4" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
