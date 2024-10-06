import Logo from "@/assets/svg/logo.svg";
import Image from "next/image";

interface FullLogoProps {
  width: number;
  text_size: number;
}

export default function FullLogo({ width, text_size }: FullLogoProps) {
  return (
    <>
      <Image src={Logo} alt="Skynet" width={width} />
      <p
        className="font-satoshi font-bold normal-case leading-[22px] text-white"
        style={{ fontSize: text_size }}
      >
        Skynet
      </p>
    </>
  );
}
