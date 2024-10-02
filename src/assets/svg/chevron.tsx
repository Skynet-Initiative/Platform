interface ChevronProps {
  stroke?: string;
  fill?: string;
  size?: string;
}

export default function Chevron({
  stroke = "#8692D0",
  fill = "none",
  size = "19",
}: ChevronProps) {
  // Utilisation de la valeur par défaut pour size
  return (
    // Ajout du mot-clé return
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="chevron-down">
        <g id="Path">
          <path
            d="M4.80651 6.93188L9.32651 11.4118L13.8064 6.89179"
            stroke={stroke}
            strokeWidth="1.5" // Utilisation de camelCase
            strokeLinecap="round" // Utilisation de camelCase
            strokeLinejoin="round" // Utilisation de camelCase
          />
          <path
            d="M4.80651 6.93188L9.32651 11.4118L13.8064 6.89179"
            stroke="white"
            strokeOpacity="0.4" // Utilisation de camelCase
            strokeWidth="1.5" // Utilisation de camelCase
            strokeLinecap="round" // Utilisation de camelCase
            strokeLinejoin="round" // Utilisation de camelCase
          />
        </g>
      </g>
    </svg>
  );
}
