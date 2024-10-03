interface SunImage {
  stroke?: string;
  fill?: string;
  width?: string;
}

export default function SunImage({
  stroke = "black",
  fill = "none",
  width = "24",
}) {
  return (
    <svg
      width={width}
      height={width}
      viewBox={`0 0 ${width} ${width}`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="5" stroke={stroke} stroke-width="1.5" />
      <path
        d="M12 19.5V22"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M12 2V4.5"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M4.5 12L2 12"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M22 12L19.5 12"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M17.3047 6.69678L19.0725 4.92901"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M4.92969 19.071L6.69745 17.3033"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M17.3047 17.3032L19.0725 19.071"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M4.92969 4.92896L6.69745 6.69672"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}
