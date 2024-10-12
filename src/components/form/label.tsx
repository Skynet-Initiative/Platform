import { useCheckboxStore } from "@/tools/store";
import { Checkbox } from "./checkbox";
import Input from "./input";
import Selector from "./selector";

interface LabelProps {
  text?: string;
  type?: "email" | "text" | "checkbox" | "selector";
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Rendre requise
  value?: string | boolean;
  children?: React.ReactNode;
  name?: string;
  if_error?: boolean;
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
        <Input
          type={type}
          placeholder={placeholder || ""}
          value={typeof value === "string" ? value : ""}
          onChange={onChange}
          errorStyle={errorStyle}
          name={name}
        />
      </span>
    </label>
  );
};
