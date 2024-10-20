export default function BillIcon({
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  stroke,
  fill = "#A8AAAE",
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
      className={className}
    >
      <g>
        <path
          fill={fill}
          d="M2 2h20v2h-2v18.08l-1.625-1.3-1.841-1.472-1.62 1.44-.664.59-.664-.59L12 19.337l-1.586 1.41-.664.59-.664-.59-1.62-1.44-1.841 1.473L4 22.08V4H2V2zm4 2v13.92l.875-.7.659-.528.63.56 1.586 1.41 1.586-1.41.664-.59.664.59 1.586 1.41 1.586-1.41.63-.56.659.527.875.7V4H6zm2 3h8v2H8V7zm2 4H9v2h6v-2h-5z"
        ></path>
      </g>
    </svg>
  );
}
