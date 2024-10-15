import clsx from "clsx";
interface FullLogoProps {
  width: number;
  text_size: number;
  className?: string;
}

export default function FullLogo({
  width,
  text_size,
  className,
}: FullLogoProps) {
  return (
    <>
      <div className={clsx(className, `w-[${width}px]`)}>
        <p
          className="font-satoshi font-bold normal-case leading-[22px] text-white"
          style={{ fontSize: text_size }}
        >
          Skynet
        </p>
      </div>
    </>
  );
}
