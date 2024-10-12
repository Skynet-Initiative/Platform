"use client";
import clsx from "clsx";
import { useState } from "react";

const PaginationNumber = () => {
  const [activeBtn, setActiveBtn] = useState<number>(1); // Commencer par le premier bouton
  const totalButtons = 5; // Nombre total de boutons
  const [hoveredBtn, setHoveredBtn] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    // Pas de changement sur hover si le bouton est déjà actif
    setHoveredBtn(index);
  };

  const handleMouseLeave = () => {
    setHoveredBtn(null); // Réinitialiser le bouton survolé
  };

  const handleClick = (index: number) => {
    setActiveBtn(index); // Définir quel bouton est actif
  };

  const verifLastIndex = (index: number) => {
    return index >= totalButtons; // Vérifie si l'index est le dernier
  };

  const verifBeginIndex = (index: number) => {
    return index <= 1; // Vérifie si l'index est le premier
  };

  const handleNext = () => {
    if (!verifLastIndex(activeBtn)) {
      setActiveBtn((prev) => prev + 1); // Augmente l'index si ce n'est pas le dernier
    }
  };

  const handlePrevious = () => {
    if (!verifBeginIndex(activeBtn)) {
      setActiveBtn((prev) => prev - 1); // Diminue l'index si ce n'est pas le premier
    }
  };

  return (
    <div className="flex select-none gap-1">
      <div
        onClick={handlePrevious}
        className="flex cursor-pointer items-center rounded-md bg-blue-300 bg-opacity-[.08] px-[10px] py-1 text-blue-100"
      >
        <p>Previous</p>
      </div>

      {[1, 2, 3, 4, 5].map((num, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index + 1)} // +1 pour correspondre aux numéros de page
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index + 1)}
          className={clsx(
            "cursor-pointer rounded-md px-3 py-1.5 transition-all",
            {
              "bg-blue-300 text-white": activeBtn === index + 1, // Style pour le bouton cliqué
              "bg-blue-300 bg-opacity-[.16] text-[#cfd3ec]":
                hoveredBtn === index + 1 && activeBtn !== index + 1, // Style de survol
              "bg-blue-300 bg-opacity-[.08] text-[#b6bee3]":
                activeBtn !== index + 1 && hoveredBtn !== index + 1, // Style normal pour les autres
            },
          )}
        >
          <p>{num}</p>
        </div>
      ))}

      <div
        onClick={handleNext}
        className="flex cursor-pointer items-center rounded-md bg-blue-300 bg-opacity-[.08] px-[10px] py-1 text-blue-100"
      >
        <p>Next</p>
      </div>
    </div>
  );
};

export default PaginationNumber;
