import React, { useRef, useState } from "react";
import { EyeIcon, EyeOffIcon, SearchIcon } from "@heroicons/react/solid";

export interface InputProps {
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  value?: string;
  error?: boolean;
  name?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  onChange,
  onSearch,
  value,
  error,
  name,
  required = false,
  placeholder,
  disabled = false,
  className = "",
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const inputRef = useRef(null);

  return (
    <div className="flex flex-col gap-y-1">
      {label && (
        <label className="whitespace-nowrap text-[.85rem]">
          {label}
          {required && <span className="mr-0.5 text-red-500">*</span>}
        </label>
      )}
      <div className={`${className} relative rounded`}>
        <input
          ref={inputRef}
          placeholder={placeholder}
          disabled={disabled}
          type={
            type === "password" ? (passwordVisible ? "text" : "password") : type
          }
          name={name}
          onChange={(e) => onChange && onChange(e.target.value)}
          value={value}
          className={`${className} w-full disabled:opacity-75 ${
            error ? "border border-red-400" : "border-0"
          } rounded bg-gray-100 px-2 py-1 text-[.85rem] dark:bg-dark-secondary`}
        />
        {type === "password" && (
          <button
            className="absolute left-2.5 top-1/2 -translate-y-1/2"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {!passwordVisible ? (
              <EyeOffIcon className="h-4 w-4" />
            ) : (
              <EyeIcon className="h-4 w-4" />
            )}
          </button>
        )}
        {type === "search" && (
          <button
            className="absolute left-2.5 top-1/2 -translate-y-1/2"
            onClick={() =>
              onSearch && onSearch((inputRef.current as any)?.value)
            }
          >
            <SearchIcon className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
