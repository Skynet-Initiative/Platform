"use client";

import EnglishFlag from "@/assets/images/flags/uk.png";
import Chevron from "@/assets/svg/chevron";
import NotificationImage from "@/assets/svg/notification.svg";
import ProfileImage from "@/assets/svg/profile.svg";
import SearchIcon from "@/assets/svg/search.svg";
import Image from "next/image";
import ChangeMod from "../../form/switchers/changeMod";

const Header = () => {
  return (
    <div className="my-6 flex h-[3.25rem] flex-row justify-between">
      <div className="flex h-full w-[23rem] flex-row gap-[1.06rem] rounded-[1.25rem] bg-[rgba(39,40,85,0.4)]">
        <Image src={SearchIcon} alt="" className="ml-[1.3rem] w-[1.6875rem]" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 border-none bg-[rgba(0,0,0,0)] text-base font-medium leading-[1.375rem] text-white outline-none placeholder:text-white"
        />
      </div>

      <div className="flex flex-row items-center gap-[1.49rem]">
        <div className="flex w-[7.62325rem] flex-row items-center gap-[0.44194rem] p-[0.49719rem] px-[0.88388rem]">
          <Image src={EnglishFlag} alt="" className="w-[1.54675rem]" />
          <span className="text-[13px] font-bold text-white">Eng</span>
          <Chevron />
        </div>

        <ChangeMod />

        <Image src={NotificationImage} alt="" />
        <Image src={ProfileImage} alt="" />
        <a href="#">
          <div className="flex h-10 w-36 items-center justify-center rounded-3xl bg-blue-300 text-xs text-white">
            <p>JOIN NOW</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
