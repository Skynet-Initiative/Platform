interface MoonImageProps {
  fill?: string;
  stroke?: string;
  width?: string;
}

export default function MoonImage({
  width = "16",
  fill = "none",
  stroke = "black",
}: MoonImageProps) {
  return (
    <svg
      width={width}
      height={width}
      viewBox={`0 0 ${width} ${width}`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.2876 11.1359C11.7548 10.8673 10.2261 9.74164 9.30501 8.02226C8.21613 5.98963 8.29421 3.72039 9.34563 2.27944C9.45339 2.13175 9.57138 1.99276 9.69939 1.86362C9.94627 1.61455 9.87492 1.14979 9.52775 1.09307C9.30134 1.05608 9.0713 1.02981 8.83817 1.01481C8.68544 1.00499 8.53138 1 8.37615 1C4.48545 1 1.33142 4.13401 1.33142 8C1.33142 11.866 4.48545 15 8.37615 15C10.5901 15 12.5656 13.9852 13.8571 12.3981C14.0038 12.2178 14.1417 12.0301 14.2701 11.8356C14.4531 11.5585 14.1993 11.2066 13.866 11.1961C13.6739 11.19 13.4807 11.1697 13.2876 11.1359Z"
        stroke={stroke}
        stroke-width="1.5"
      />
    </svg>
  );
}
