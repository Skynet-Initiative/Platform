import clsx from "clsx";

interface SearchIconProps {
  className?: string;
}

export default function SearchIcon({ className }: SearchIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="28"
      fill="none"
      viewBox="0 0 27 28"
      className={clsx(className)}
    >
      <path
        stroke="#fff"
        strokeWidth="1.5"
        d="M24.652 25.152L18.28 18.78m-6.372 3.186a9.559 9.559 0 110-19.117 9.559 9.559 0 010 19.117z"
      ></path>
    </svg>
  );
}
