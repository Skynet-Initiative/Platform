import SortedChevron from "@/components/SortedChevron";

export default function CouponsColumns() {
  return (
    <div className="flex justify-around bg-white/5 py-[8px] uppercase">
      <div className="flex w-[80px] items-center justify-between">
        <p className="text-[13px] font-medium tracking-wide text-white/60">
          Code
        </p>
        <SortedChevron />
      </div>
      <div className="flex w-[370px] items-center justify-between">
        <p className="text-[13px] font-medium tracking-wide text-white/60">
          Discount
        </p>
        <SortedChevron />
      </div>
      <div className="flex w-[151px] items-center justify-between">
        <p className="text-[13px] font-medium tracking-wide text-white/60">
          Product
        </p>
        <SortedChevron />
      </div>
      <div className="flex w-[120px] items-center justify-between">
        <p className="text-[13px] font-medium tracking-wide text-white/60">
          Status
        </p>
        <SortedChevron />
      </div>
      <div className="flex w-[151px] items-center justify-between">
        <p className="text-[13px] font-medium tracking-wide text-white/60">
          Used
        </p>
        <SortedChevron />
      </div>
      <div className="flex w-[120px] items-center justify-between">
        <p className="text-[13px] font-medium tracking-wide text-white/60">
          Actions
        </p>
        <SortedChevron />
      </div>
    </div>
  );
}
