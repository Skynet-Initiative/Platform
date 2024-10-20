import clsx from "clsx"; // Si tu utilises clsx pour gérer les classes conditionnelles

export default function SecurityIcon({
  className,
  fill = "#A8AAAE",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  stroke,
}: {
  className?: string;
  stroke?: string;
  fill?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill={fill}
      viewBox="0 0 24 24"
      className={clsx(className)}
    >
      <g>
        <path
          fill={fill}
          d="M12 22c-2.317-.583-4.23-1.913-5.738-3.988C4.753 15.937 3.999 13.632 4 11.1V5l8-3 8 3v6.1c0 2.533-.754 4.838-2.263 6.913S14.316 21.417 12 22zm0-2.1c1.617-.5 2.967-1.488 4.05-2.963A9.874 9.874 0 0017.95 12H12V4.125l-6 2.25v5.175c0 .117.017.267.05.45H12v7.9z"
        ></path>
      </g>
    </svg>
  );
}
