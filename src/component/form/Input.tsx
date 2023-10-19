import React from "react";
import { useFormContext } from "react-hook-form";

interface Iinput {
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
  defaultValue?: any;
}
const Input = ({ name, type, label, placeholder, defaultValue }: Iinput) => {
  const { register } = useFormContext();
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}

      <input
        style={{
          border: "1px solid black",
          padding: "8px 10px",
          marginTop: "2px",
          marginBottom: "6px",
        }}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name)}
        className="input input-bordered input-primary w-full max-w-xs"
      />
    </>
  );
};

export default Input;
