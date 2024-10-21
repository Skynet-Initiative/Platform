"use client";
import clsx from "clsx";

interface ButtonProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon?: any;
  width_icon?: number;
  gap?: number;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  name,
  Icon,
  width_icon = 24,
  gap = 6, // Ajout d'une valeur par défaut pour le gap
  selected = false,
  className,
  onClick,
}: ButtonProps) {
  const color_default = "white/60";
  const color_default_css = "rgba(255, 255, 255, 0.6)";
  const bg_color_select = "blue-300";
  const color_select = "white";

  return (
    <div
      className={clsx(
        "flex cursor-pointer items-center rounded-[6px] px-5 py-[10px]",
        `gap-${gap}`,
        selected
          ? `bg-${bg_color_select} text-${color_select}`
          : `text-${color_default}`,
        className,
        "whitespace-nowrap", // Empêche le retour à la ligne
      )}
      onClick={onClick}
    >
      {Icon && (
        <Icon
          className={clsx("h-auto", `w-[${width_icon}px]`)}
          stroke={selected ? color_select : color_default_css}
          fill={selected ? color_select : color_default_css}
        />
      )}
      <p>{name}</p>
    </div>
  );
}
