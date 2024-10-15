import React from "react";

interface ChevronProps {
  stroke?: string;
  fill?: string;
  size?: string;
  rotation?: number; // Ajout de la prop rotation pour définir l'angle
}

export default function Chevron({
  stroke = "#8692D0",
  fill = "none",
  size = "19",
  rotation = 0, // Valeur par défaut pour la rotation (0°)
}: ChevronProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 19 19`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }} // Application de la rotation
    >
      <g id="chevron-down">
        <g id="Path">
          <path
            d="M4.80651 6.93188L9.32651 11.4118L13.8064 6.89179"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.80651 6.93188L9.32651 11.4118L13.8064 6.89179"
            stroke="white"
            strokeOpacity="0.4"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}
