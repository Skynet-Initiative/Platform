"use client";
import { useEffect, useState } from "react";

interface FooterProps {
  paddingTop: number;
  name?: string;
}

export default function Footer({ paddingTop, name }: FooterProps) {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div
      className="font-regular mx-0 mb-4 ml-8 mr-11 flex justify-between font-satoshi text-[15px] text-white/70"
      style={{ paddingTop: paddingTop }}
    >
      <div>
        <p>
          &copy; 2023-{year || "…"} All rights{" "}
          {name ? (
            <span className="text-[15px]/snug font-normal text-white">
              {name}
            </span>
          ) : (
            "Skynet"
          )}
        </p>
      </div>
      <div>
        <ul className="flex gap-4">
          <li>
            <a href="#">License</a>
          </li>
          <li>
            <a href="#">Documentation</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
