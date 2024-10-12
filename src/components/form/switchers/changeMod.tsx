import MoonImage from "@/assets/svg/moon";
import SunImage from "@/assets/svg/sun";
import clsx from "clsx";
import { useState } from "react";

export default function ChangeMod() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); // Inverser l'état lorsqu'on clique
  };

  return (
    <div
      onClick={handleClick}
      className={clsx(
        "z-0 flex h-[2rem] w-[3.5rem] cursor-pointer flex-row items-center rounded-[1rem] bg-white/10",
        clicked ? "justify-start" : "justify-end",
      )}
    >
      <div
        className={clsx(
          "z-10 flex h-[1.75rem] w-[1.75rem] items-center justify-center rounded-[0.875rem] bg-white",
          clicked ? "ml-[2px]" : "mr-2px]",
        )}
      >
        {clicked ? <SunImage stroke="black" /> : <MoonImage stroke="black" />}
      </div>
    </div>
  );
}
