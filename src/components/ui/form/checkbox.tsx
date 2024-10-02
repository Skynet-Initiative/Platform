"use client";

import CheckboxImage from "@/assets/images/checkbox.png";
import { useCheckboxStore } from "@/tools/store";
import clsx from "clsx";
import Image from "next/image";

export const Checkbox = () => {
  const { isChecked, toggleCheckbox } = useCheckboxStore();

  return (
    <div
      onClick={toggleCheckbox}
      className={clsx(
        "flex h-4 min-h-4 w-4 min-w-4 cursor-pointer select-none items-center justify-center rounded-[4px]",
        isChecked ? "bg-blue-300" : "bg-transparent",
        isChecked ? "border-none" : "border border-white",
      )}
    >
      <Image
        src={CheckboxImage}
        alt="Check"
        width={9}
        height={9}
        className={isChecked ? "block" : "hidden"}
      />
    </div>
  );
};
