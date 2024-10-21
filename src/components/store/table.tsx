import React from "react";

interface TableProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function Table({ title, subtitle, children }: TableProps) {
  return (
    <div className="rounded-[20px] bg-white/5 font-satoshi text-white">
      <div className="gap-[15px] px-6 pt-6">
        <p className="text-lg/normal font-medium text-white/90">{title}</p>
        <div className="flex h-[45px] items-center text-[15px]/[24px] font-normal text-white/80">
          <p>{subtitle}</p>
        </div>
      </div>
      {children}
    </div>
  );
}
