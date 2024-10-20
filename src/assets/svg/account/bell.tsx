export default function BellIcon({
  className,
  stroke = "#A8AAAE",
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
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
      className={className}
      stroke={stroke}
    >
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M7.5 3.75a1.5 1.5 0 113 0 5.25 5.25 0 013 4.5v2.25a3 3 0 001.5 2.25H3a3 3 0 001.5-2.25V8.25a5.25 5.25 0 013-4.5"></path>
        <path d="M6.75 12.75v.75a2.25 2.25 0 004.5 0v-.75"></path>
      </g>
    </svg>
  );
}
