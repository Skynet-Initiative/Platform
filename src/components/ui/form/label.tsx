"use client";
import { Checkbox } from "./checkbox";
import Selector from "./selector"; // Assurez-vous d'importer le composant Selector

interface LabelProps {
  text?: string;
  type?: "email" | "text" | "checkbox" | "selector"; // Ajout de l'option currency
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode; // Ajout de la propriété children
}

export const Label = ({
  text,
  type = "text",
  placeholder,
  onChange,
  children, // Ajout de children ici
}: LabelProps) => {
  if (type === "checkbox") {
    return (
      <div className="my-6 flex flex-row-reverse items-center justify-end gap-2 text-xs text-gray-400">
        {children}
        <Checkbox />
      </div>
    );
  }

  if (type === "selector") {
    return (
      <label className="flex flex-col">
        <div className="inline-flex w-full flex-col items-start justify-start gap-2.5">
          <div className="h-6 font-satoshi text-base font-medium leading-normal text-white">
            {text}
          </div>
          <div className="inline-flex h-10 w-full items-center justify-start rounded-lg bg-white/10">
            <Selector name={placeholder} />
          </div>
        </div>
      </label>
    );
  }

  return (
    <label className="flex flex-col">
      <span className="mb-2 text-sm text-grey-100">
        {text} <span className="text-red">*</span>
      </span>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="flex w-full items-center gap-[0.5rem] self-stretch rounded-[0.5rem] border border-grey-300 bg-transparent-8 p-[0.5rem] pl-[1rem] text-white shadow-md outline-none"
      />
      <style jsx>{`
        input::placeholder {
          @apply font-sm bg-grey-200 font-inter leading-6;
        }
      `}</style>
    </label>
  );
};
