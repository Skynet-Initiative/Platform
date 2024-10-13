import clsx from "clsx";

interface StockColumnProps {
  stock: number;
  className?: string; // Argument optionnel
}

export default function StockColumn({ stock, className }: StockColumnProps) {
  return (
    <div
      className={clsx(
        "w-[20px] text-center text-[15px]/[22px] font-normal text-white/60",
        className,
      )}
    >
      <p>{stock}</p>
    </div>
  );
}
