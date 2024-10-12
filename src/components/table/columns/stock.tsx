interface StockColumnProps {
  stock: number;
}

export default function StockColumn({ stock }: StockColumnProps) {
  return (
    <div className="w-[20px] text-center text-[15px]/[22px] font-normal text-white/60">
      <p>{stock}</p>
    </div>
  );
}
