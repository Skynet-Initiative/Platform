import Chevrown from "@/assets/svg/chevron";
import clsx from "clsx";

interface SelectorProps {
  name?: string;
  width?: number;
  height?: number;
  className?: string;
  font?: string;
  font_size?: string;
}

const Selector = ({
  name = "default",
  width,
  height,
  className,
  font,
  font_size,
}: SelectorProps) => {
  return (
    <div
      className={clsx(
        `flex items-center justify-between rounded-lg px-4 py-[13px]`,
        className,
      )}
      style={{
        height: height ? `${height}px` : "40px",
        width: width ? `${width}px` : "100%",
      }}
    >
      <p
        className={clsx(
          `font-normal leading-snug text-white/80`,
          font ? `font-${font}` : `font-satoshi`,
        )}
        style={{
          fontSize: font_size ? `${font_size}px` : "13px",
          width: width ? `${width}px` : "100%",
        }}
      >
        {name}
      </p>
      <Chevrown stroke="white" />
    </div>
  );
};

export default Selector;
