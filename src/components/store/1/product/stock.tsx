interface StockProps {
  number: number;
}

export default function Stock(props: StockProps) {
  return (
    <div className="text-sm font-bold text-[#28c76f]">
      {props.number} in stock
    </div>
  );
}
