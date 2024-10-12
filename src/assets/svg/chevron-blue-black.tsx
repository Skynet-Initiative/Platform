interface ChevronBlackBlueProps {
  stroke?: string;
  fill?: string;
  size?: string;
  rotation?: number;
}

export default function ChevronBlackBlue({
  stroke = "#0074E4",
  fill = "none",
  size = "18",
  rotation = 0,
}: ChevronBlackBlueProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 19"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }} // Application de la rotation
    >
      <path
        d="M4.5 7.25L9 11.75L13.5 7.25"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 7.25L9 11.75L13.5 7.25"
        stroke="black"
        strokeOpacity="0.3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
