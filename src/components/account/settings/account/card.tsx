"use client";
import UsersIcon from "@/assets/svg/navbar/users";
import Button from "./button";

export default function SettingsAcount() {
  return (
    <div className="flex flex-col gap-[26px]">
      <div className="flex gap-[10px]">
        <p className="text-blue-300">Account Settings</p>
        <p className="text-blue-300">/</p>
        <p>Account</p>
      </div>
      <div>
        <Button name="Account" selected={true} gap={8} Icon={UsersIcon} />
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
