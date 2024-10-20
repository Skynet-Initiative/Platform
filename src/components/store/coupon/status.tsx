interface StatusForm {
  active?: boolean;
  className?: string;
}

export default function Status({ active, className }: StatusForm) {
  const color = active ? "#28c76f" : "#ea5455";
  const text = active ? "ACTIVE" : "NON ACTIVE";

  return (
    <div
      className={`inline-flex h-6 items-center justify-start gap-2.5 rounded px-2.5 py-[5px] bg-[${color}]/20 ${className || ""}`}
    >
      <div
        className={`font-sans text-[13px] font-semibold leading-[14px] text-[${color}]`}
      >
        {text}
      </div>
    </div>
  );
}
