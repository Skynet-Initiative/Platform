import AvatarIcon from "@/assets/svg/account/avatar.svg";
import UploadIcon from "@/assets/svg/account/upload";
import Input from "@/components/form/input";
import Selector from "@/components/form/selector";
import Image from "next/image";
import Button from "../button";
import SubmitButtons from "../submit_buttons";

export default function ProfileDetails() {
  return (
    <div className="flex flex-col rounded-[20px] bg-white/5 text-white">
      <div className="p-[24px]">
        <p className="text- text-[18px]/[24px] font-medium text-blue-50">
          Profile Details
        </p>
        <div className="flex items-center gap-[26px] pt-[16px]">
          <Image src={AvatarIcon} alt="" />
          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[16px]">
              <Button
                Icon={UploadIcon}
                name="Upload new photo"
                selected={true}
                className="flex w-[200px] justify-between"
              />

              <Button name="Reset" className="bg-white/10" />
            </div>
            <p className="text-[15px] font-normal text-white/80">
              Allowed JPG, GIF or PNG. Max size of 800K
            </p>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-white/5"></div>
      <div className="flex flex-col gap-[25px] p-[24px]">
        <div className="flex w-full gap-[16px]">
          <div className="flex flex-auto flex-col gap-[10px]">
            <p className="text-[13px] font-medium text-white">Username</p>
            <Input
              type="text"
              placeholder="Username"
              name="username"
              className="bg-white/5 placeholder:text-[13px]/[24px] placeholder:font-medium placeholder:text-white/80"
            />
          </div>
          <div className="flex flex-auto flex-col gap-[10px]">
            <p className="text-[13px] font-medium text-white">Full Name</p>
            <Input
              type="text"
              placeholder="Name"
              name="username"
              className="bg-white/5 placeholder:text-[13px]/[24px] placeholder:font-medium placeholder:text-white/80"
            />
          </div>
        </div>
        <div className="flex w-full gap-[16px]">
          <div className="flex flex-auto flex-col gap-[10px]">
            <p className="text-[13px] font-medium text-white">Country</p>
            <Selector
              name="Default"
              className="bg-white/5 px-[14px] py-[7px] text-white/80"
            />
          </div>
          <div className="flex flex-auto flex-col gap-[10px]">
            <p className="text-[13px] font-medium text-white">Language</p>
            <Selector
              name="English"
              className="bg-white/5 px-[14px] py-[7px] text-white/80"
            />
          </div>
        </div>
        <div className="flex w-full gap-[16px]">
          <div className="flex flex-auto flex-col gap-[10px]">
            <p className="text-[13px] font-medium text-white">Timezone</p>
            <Selector
              name="Select Timezone"
              className="bg-white/5 px-[14px] py-[7px] text-white/80"
            />
          </div>
          <div className="flex flex-auto flex-col gap-[10px]">
            <p className="text-[13px] font-medium text-white">Currency</p>
            <Selector
              name="Select Currency"
              className="bg-white/5 px-[14px] py-[7px] text-white/80"
            />
          </div>
        </div>
      </div>
      <SubmitButtons />
    </div>
  );
}
