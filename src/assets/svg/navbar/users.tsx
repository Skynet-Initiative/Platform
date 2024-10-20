import clsx from "clsx";

export default function UsersIcon({
  className,
  stroke = "#8692D0",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fill,
}: {
  className?: string;
  stroke?: string;
  fill?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="24"
      fill="none"
      viewBox="0 0 23 24"
      className={clsx(className)}
    >
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <g transform="rotate(-.255 9.1 7.392)">
          <ellipse
            cx="9.1"
            cy="7.392"
            stroke={stroke}
            rx="3.667"
            ry="3.667"
          ></ellipse>
          <ellipse
            cx="9.1"
            cy="7.392"
            stroke={stroke}
            strokeOpacity="0.4"
            rx="3.667"
            ry="3.667"
          ></ellipse>
        </g>
        <g>
          <path
            stroke={stroke}
            d="M3.658 20.25l-.009-1.834a3.667 3.667 0 013.65-3.683l3.667-.016a3.667 3.667 0 013.683 3.65l.008 1.834"
          ></path>
          <path
            stroke={stroke}
            strokeOpacity="0.4"
            d="M3.658 20.25l-.009-1.834a3.667 3.667 0 013.65-3.683l3.667-.016a3.667 3.667 0 013.683 3.65l.008 1.834"
          ></path>
        </g>
        <g>
          <path
            stroke={stroke}
            d="M15.501 3.816a3.667 3.667 0 01.032 7.104"
          ></path>
          <path
            stroke={stroke}
            strokeOpacity="0.4"
            d="M15.501 3.816a3.667 3.667 0 01.032 7.104"
          ></path>
        </g>
        <g>
          <path
            stroke={stroke}
            d="M20.157 20.176l-.008-1.833a3.667 3.667 0 00-2.765-3.517"
          ></path>
          <path
            stroke={stroke}
            strokeOpacity="0.4"
            d="M20.157 20.176l-.008-1.833a3.667 3.667 0 00-2.765-3.517"
          ></path>
        </g>
      </g>
    </svg>
  );
}
