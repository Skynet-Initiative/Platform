import clsx from "clsx";
import React from "react";

interface DocIconProps {
  className?: string;
}

const DocIcon: React.FC<DocIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="27"
      fill="none"
      viewBox="0 0 26 27"
      className={clsx(className)}
    >
      <g
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.8"
      >
        <path
          strokeWidth="2"
          d="M15.167 3.458v4.333c0 .599.485 1.084 1.083 1.084h4.333"
        ></path>
        <path
          fillRule="evenodd"
          strokeWidth="2"
          d="M18.417 22.958H7.583a2.167 2.167 0 01-2.166-2.167V5.625c0-1.197.97-2.167 2.166-2.167h7.584l5.416 5.417V20.79c0 1.197-.97 2.167-2.166 2.167z"
          clipRule="evenodd"
        ></path>
        <path strokeWidth="1.5" d="M9.75 9.958h1.083"></path>
        <path strokeWidth="1.5" d="M9.75 14.292h6.5"></path>
        <path strokeWidth="1.5" d="M9.75 18.625h6.5"></path>
      </g>
    </svg>
  );
};

export default DocIcon;
