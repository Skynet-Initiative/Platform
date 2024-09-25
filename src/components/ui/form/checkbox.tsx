"use client";

import CheckboxImage from "@/assets/images/checkbox.png";
import { Blue } from "@/styles/colors";
import { useCheckboxStore } from "@/tools/store";
import Image from "next/image";

export const Checkbox = () => {
  const { isChecked, toggleCheckbox } = useCheckboxStore();

  return (
    <div
      onClick={toggleCheckbox}
      style={{
        cursor: "pointer",
        minWidth: "1rem",
        minHeight: "1rem",
        maxWidth: "1rem",
        maxHeight: "1rem",
        width: "1rem",
        height: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        backgroundColor: isChecked ? Blue[2] : "transparent",
        border: isChecked ? "none" : "1px solid white",
        userSelect: "none",
      }}
    >
      <Image
        src={CheckboxImage}
        alt="Check"
        width={9}
        height={9}
        style={{ display: isChecked ? "block" : "none" }}
      />
    </div>
  );
};
