import Icon2FA from "@/assets/svg/account/2FA-icon.svg";
import Image from "next/image";
import Button from "../button";

export default function Settings2FA() {
  return (
    <div className="flex flex-col rounded-[6px] bg-white/5">
      <div className="flex gap-[16px] p-[24px]">
        <Image src={Icon2FA} alt="" />
        <p className="text-lg font-medium leading-normal text-white">
          Two-steps verification
        </p>
      </div>
      <div className="flex flex-col gap-[16px] px-[24px]">
        <p className="text-[15px] font-medium leading-[21px] text-[#ea5455]">
          Two-factor authentication is not enabled yet.
        </p>
        <p className="w-[520px] text-[15px]/snug font-normal text-white/60">
          Two-factor authentication adds a layer of security to your account by
          requiring more than just a password to log in. Learn more.
        </p>
      </div>
      <div className="flex w-auto p-[24px]">
        <Button name="Enable two-factor authentication" selected={true} />
      </div>
    </div>
  );
}
