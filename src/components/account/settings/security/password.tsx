"use client";
import Input from "@/components/form/input";
import SubmitButtons from "../submit_buttons";

export default function SettingsPassword() {
  return (
    <div className="flex flex-col bg-white/5 text-white">
      <div className="p-[24px]">
        <p className="text-lg/normal font-medium">Profile Details</p>
      </div>
      <div className="h-[1px] w-full bg-[#434968]"></div>
      <div className="flex flex-col gap-[25px] p-[24px] pr-[200px]">
        <div className="flex w-full gap-[16px]">
          <div className="flex flex-auto flex-col gap-[10px]">
            <p className="text-[13px] font-medium text-white">Username</p>
            <Input
              type="text"
              placeholder="JoDo44"
              name="username"
              className="bg-white/5 placeholder:text-[13px]/[24px] placeholder:font-medium placeholder:text-white/80"
            />
          </div>
          <div className="flex flex-auto flex-col gap-[10px]">
            <p className="text-[13px] font-medium text-white">Email</p>
            <Input
              type="text"
              placeholder="john.doe@gmail.com"
              name="username"
              className="bg-white/5 placeholder:text-[13px]/[24px] placeholder:font-medium placeholder:text-white/80"
            />
          </div>
        </div>
      </div>
      <SubmitButtons />
    </div>
  );
}
