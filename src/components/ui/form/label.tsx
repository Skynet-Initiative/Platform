"use client";

import { Grey, Red, White } from "@/styles/colors";
import { Size, Weight } from "@/styles/variables";

interface LabelProps {
  text: string;
  type?: "email" | "text";
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Label = ({
  text,
  type = "text",
  placeholder,
  onChange,
}: LabelProps) => {
  return (
    <label style={{ display: "flex", flexDirection: "column" }}>
      <span style={{ color: Grey[1], fontSize: Size.xs, marginBottom: "8px" }}>
        {text} <span style={{ color: Red[1] }}>*</span>
      </span>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        style={{
          display: "flex",
          width: "100%",
          padding: "0.500rem 0.75rem",
          alignItems: "center",
          gap: "0.5rem",
          alignSelf: "stretch",
          borderRadius: "0.5rem",
          border: "1px solid " + Grey[3],
          background: White.transparent[2],
          boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
          outline: "none",
          color: "white",
        }}
      />
      <style jsx>{`
        input::placeholder {
          color: ${Grey[2]}; /* Couleur du placeholder */
          font-family: "Inter", sans-serif;
          font-size: ${Size.sm};
          font-style: normal;
          font-weight: ${Weight.normal};
          line-height: 1.5rem;
        }
      `}</style>
    </label>
  );
};
