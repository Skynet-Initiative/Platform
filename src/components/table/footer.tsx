import PaginationNumber from "./pagination";

export default function FooterTable() {
  return (
    <div className="mx-6 flex items-end justify-between">
      <p className="text-[13px]/[20px] text-white/60">
        Showing 1 of 7 pages of 100 products
      </p>
      <PaginationNumber />
    </div>
  );
}
