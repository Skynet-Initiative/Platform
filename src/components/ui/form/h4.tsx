"use client";
import React from "react";

interface H4Props {
  text: string;
}

export default function h4({ text }: H4Props) {
  // Décomposition correcte des props
  return (
    <div className="h-screen w-[40%]">
      <div className="bg-transparent-2 flex h-full w-full items-center justify-center rounded-[17px]">
        {children}
      </div>
    </div>
  );
}
