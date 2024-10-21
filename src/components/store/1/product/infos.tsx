interface ProductInfosProps {
  name: string;
  type: string;
}

export default function ProductInfos(props: ProductInfosProps) {
  return (
    <div className="mt-[22px] flex flex-col items-start justify-center gap-1.5">
      <div className="text-base font-medium leading-tight text-white">
        {props.name}
      </div>
      <div className="text-[11px] font-medium leading-tight text-[#d2d2d2]/50">
        {props.type}
      </div>
    </div>
  );
}
