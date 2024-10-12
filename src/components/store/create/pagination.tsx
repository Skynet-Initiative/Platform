export default function Pagination() {
  return (
    <div className="text-medium my-2 flex w-full flex-wrap gap-[35px] text-[15px]">
      <a
        href="#"
        className="flex flex-1 items-center justify-center rounded-md bg-[rgba(255,255,255,0.10)] py-[10px] text-[rgba(255,255,255,0.70)]"
      >
        <p>Previous</p>
      </a>
      <a
        href="#"
        className="flex flex-1 items-center justify-center rounded-md bg-blue-300 py-[10px] text-white"
      >
        <p>Next</p>
      </a>
    </div>
  );
}
