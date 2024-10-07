"use client";
import clsx from "clsx";
import { useState } from "react";

const ChoiceStatut = () => {
  const [active, setActive] = useState("Individual");

  return (
    <div className="mb-4 flex select-none gap-[9px] text-[11px] font-bold uppercase">
      <div
        className={clsx(
          "cursor-pointer rounded-[100px] px-6 py-2 text-center",
          active === "Individual"
            ? "bg-blue-300 text-white"
            : "bg-white/5 text-white/50",
        )}
        onClick={() => setActive("Individual")}
      >
        <p>Individual</p>
      </div>
      <div
        className={clsx(
          "cursor-pointer rounded-[100px] px-6 py-2 text-center",
          active === "Compagny"
            ? "bg-blue-300 text-white"
            : "bg-white/5 text-white/50",
        )}
        onClick={() => setActive("Compagny")}
      >
        <p>Compagny</p>
      </div>
    </div>
  );
};

export default ChoiceStatut;
