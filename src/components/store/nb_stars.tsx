import clsx from "clsx";

interface NbStarsProps {
  number: string;
  className?: string; // Ajout de la prop className
}

export default function NbStars({ number, className }: NbStarsProps) {
  return (
    <div
      className={clsx(
        "inline-flex h-[22.30px] w-[37.16px] items-center justify-center gap-[6.39px] rounded bg-white/10 p-[5.11px]",
        className,
      )}
    >
      <div className="text-[10px] font-medium leading-normal text-white">
        {number}
      </div>
    </div>
  );
}
