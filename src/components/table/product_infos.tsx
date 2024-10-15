import DocIcon from "@/assets/svg/doc_icon";

interface ProductInfosProps {
  name: string;
  date: string;
}

export default function ProductInfos({ name, date }: ProductInfosProps) {
  return (
    <div className="flex gap-[10px]">
      <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-blue-300 bg-opacity-[.16]">
        <DocIcon className="w-[26px]" />
      </div>
      <div className="flex flex-col">
        <p className="text-[15px]/[22px] font-medium">{name}</p>
        <p className="font-sans text-[13px]/[20px] font-normal text-white/50">
          {date}
        </p>
      </div>
    </div>
  );
}
