"use client";
import clsx from "clsx";

interface ButtonProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon?: any;
  width_icon?: number;
  gap: number;
  selected?: boolean;
}

export default function Button({
  name,
  Icon,
  width_icon = 24,
  gap,
  selected = false,
}: ButtonProps) {
  const color_default = "white/60";
  const bg_color_select = "blue-300";
  const color_select = "white";

  return (
    <div
      className={clsx(
        "flex items-center px-5 py-[10px]",
        `gap-[${gap}px]`,
        selected
          ? `bg-${bg_color_select} text-${color_select}`
          : `text-${color_default}`,
      )}
    >
      {Icon && (
        <Icon
          className={clsx(
            "h-auto",
            `w-[${width_icon}px]`,
            selected ? `fill-${color_select}` : `fill-${color_default}`,
          )}
        />
      )}
      <p>{name}</p>
    </div>
  );
}
