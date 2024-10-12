"use client";

import clsx from "clsx";
import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorStyle?: string;
  name: string;
  className?: string; // Ajout de la propriété className
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  errorStyle,
  name,
  className, // Ajout ici
}) => {
  return (
    <div>
      <input
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        value={typeof value === "string" ? value : ""}
        onChange={onChange}
        className={clsx(
          "flex w-full items-center gap-[0.5rem] self-stretch rounded-[0.5rem] border border-grey-300 bg-transparent-8 p-[0.5rem] pl-[1rem] text-white shadow-md outline-none",
          errorStyle,
          className, // Utilisation de className ici
        )}
        name={name}
      />
      <style jsx>{`
        input::placeholder {
          @apply bg-grey-200 font-inter text-sm leading-6;
        }
      `}</style>
    </div>
  );
};

export default Input;
