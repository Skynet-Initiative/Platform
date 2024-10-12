import Chevrown from "@/assets/svg/chevron";
import clsx from "clsx";

interface SelectorProps {
  name?: string;
  width?: number;
  height?: number;
  className?: string;
  width_image?: string;
}

const Selector = ({
  name = "default",
  width,
  height,
  className,
  width_image = "19",
}: SelectorProps) => {
  return (
    <div
      className={clsx(
        `flex items-center justify-between rounded-lg px-4 py-[13px] font-sans text-[13px]`,
        className,
      )}
      style={{
        height: height ? `${height}px` : "40px",
        width: width ? `${width}px` : "100%",
      }}
    >
      <p
        className={clsx(`leading-snug text-white/80`)}
        style={{
          width: width ? `${width}px` : "100%",
        }}
      >
        {name}
      </p>
      <Chevrown stroke="white" size={width_image} />
    </div>
  );
};

export default Selector;
