"use client";
import React from "react";

interface CardFormProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function CardForm({ children, title, subtitle }: CardFormProps) {
  return (
    <div className="h-screen w-[40%]">
      <div className="bg-transparent-2 flex h-full w-full items-center justify-center rounded-[17px]">
        <div className="w-[26rem]">
          <div className="mb-6 flex flex-col items-start justify-center gap-4 p-2">
            <h4 className="font-inter text-3xl font-semibold leading-[2.375rem] text-white">
              {title}
            </h4>
            <span className="font-inter text-base font-normal text-gray-400">
              {subtitle}
            </span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
