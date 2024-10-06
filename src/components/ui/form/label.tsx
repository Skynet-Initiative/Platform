"use client";
import { useCheckboxStore } from "@/tools/store";
import clsx from "clsx"; // Importation de clsx
import { Checkbox } from "./checkbox";
import Selector from "./selector"; // Assurez-vous d'importer le composant Selector

interface LabelProps {
  text?: string;
  type?: "email" | "text" | "checkbox" | "selector";
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | boolean; // Autoriser string ou boolean pour gérer checkbox et autres
  children?: React.ReactNode;
  name?: string;
  if_error?: boolean; // Nouvelle propriété pour gérer les erreurs
  submit?: boolean;
}

export const Label = ({
  text,
  type = "text",
  placeholder,
  onChange,
  value,
  children,
  name = "",
  if_error = false,
  submit = false,
}: LabelProps) => {
  const { isChecked } = useCheckboxStore();

  // Gestion du type checkbox séparément
  if (type === "checkbox") {
    const errorStyle =
      !isChecked && type === "checkbox" && submit
        ? "border border-1 border-red-400"
        : "";
    return (
      <div className="my-6 flex flex-row-reverse items-center justify-end gap-2 text-xs text-gray-400">
        {children}
        <Checkbox className={errorStyle} />
      </div>
    );
  }

  // Gestion du type selector
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

  const errorStyle = if_error ? "border border-1 border-red-400" : "";

  // Gestion des autres types d'input
  return (
    <label className="flex flex-col">
      <span className="mb-2 text-sm text-grey-100">
        {text} <span className="text-red-400">*</span>
      </span>
      <input
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        value={typeof value === "string" ? value : ""} // Assurez-vous que value est string
        onChange={onChange}
        className={clsx(
          "flex w-full items-center gap-[0.5rem] self-stretch rounded-[0.5rem] border border-grey-300 bg-transparent-8 p-[0.5rem] pl-[1rem] text-white shadow-md outline-none",
          errorStyle,
        )}
        name={name}
      />
      <style jsx>{`
        input::placeholder {
          @apply font-sm bg-grey-200 font-inter leading-6;
        }
      `}</style>
    </label>
  );
};
