import Chevron from "@/assets/svg/chevron";
import ChevronBlackBlue from "@/assets/svg/chevron-blue-black";
import { useState } from "react";

export default function SortedChevron() {
  const [isSorted, setIsSorted] = useState(false);
  const handleToggle = () => {
    setIsSorted((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col" onClick={handleToggle}>
      {isSorted ? (
        <>
          <ChevronBlackBlue rotation={180} />
          <Chevron rotation={0} stroke="#0074E4" />
        </>
      ) : (
        <>
          <Chevron rotation={180} stroke="#0074E4" />
          <ChevronBlackBlue />
        </>
      )}
    </div>
  );
}
