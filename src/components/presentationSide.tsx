import Cube from "@/assets/svg/cube.svg";
import Logo from "@/assets/svg/logo";
import Image from "next/image";

export default function PresentationSide() {
  return (
    <div className="flex w-[60%] flex-col items-center justify-center font-satoshi font-semibold">
      <Logo className="z-20" />
      <div className="flex flex-col items-center">
        <div className="h-[27rem] w-[32rem] flex-shrink-0 rotate-[-33deg] rounded-[506px] bg-[#0d275a] blur-[187px]"></div>
        <Image
          src={Cube}
          alt=""
          className="absolute bottom-[42%] z-20 w-[15%] filter-none"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-4 text-center">
        <h4 className="z-20 w-full text-[32px] font-semibold text-white">
          Welcome to the Future of <br /> Digital{" "}
          <span className="text-blue-300">selling</span>
        </h4>
        <span className="z-20 text-[15px] font-normal text-grey-100">
          Your Key To Digital Success
        </span>
      </div>
    </div>
  );
}
