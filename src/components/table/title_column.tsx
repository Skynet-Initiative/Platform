import clsx from "clsx";
import SortedChevron from "../SortedChevron";

interface TitleColumnProps {
  name: string;
  className?: string; // Argument optionnel
}

const TitleColumn = ({ name, className }: TitleColumnProps) => (
  <div
    className={clsx(
      "flex h-[35px] flex-shrink-0 items-center gap-[10px] uppercase tracking-[1px]",
      className,
    )}
  >
    <p className="text-[13px] font-normal">{name}</p>
    <SortedChevron />
  </div>
);

export default TitleColumn;
