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
    <div className="">
      {label && <label className="">{label}</label>}
      <input
        {...props}
        type={type}
        onChange={onChange}
        value={value}
        className={`${(props as any)["className"]}`}
      />
    </div>
  );
};

export default Input;
