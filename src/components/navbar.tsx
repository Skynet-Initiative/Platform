"use client";

import Chevron from "@/assets/svg/chevron";
import BrandIcon from "@/assets/svg/navbar/brand-pagekit";
import ComponentsIcon from "@/assets/svg/navbar/components";
import FileIcon from "@/assets/svg/navbar/file-text";
import GamepadIcon from "@/assets/svg/navbar/gamepad";
import HeadphonesIcon from "@/assets/svg/navbar/headphones";
import MobileMessageIcon from "@/assets/svg/navbar/mobile-message";
import PointIcon from "@/assets/svg/navbar/point";
import SettingsIcon from "@/assets/svg/navbar/settings";
import ShoppingIcon from "@/assets/svg/navbar/shopping";
import UsersIcon from "@/assets/svg/navbar/users";
import clsx from "clsx";
import FullLogo from "./fullLogo";

const categories = [
  {
    title: null,
    buttons: [
      { image: <ShoppingIcon />, label: "Store", link: "#" },
      { image: <GamepadIcon />, label: "Library", link: "#" },
      { image: <MobileMessageIcon />, label: "Comms", link: "#" },
      { image: <BrandIcon />, label: "Pages", link: "#" },
      { image: <ComponentsIcon />, label: "Pricing", link: "#" },
    ],
  },
  {
    title: "Admin",
    buttons: [
      { image: <UsersIcon />, label: "Users Account", link: "#" },
      { image: <SettingsIcon />, label: "Roles & Permissions", link: "#" },
      { image: <PointIcon />, label: "Datatables", link: "#" },
    ],
  },
  {
    title: "Shop",
    buttons: null,
    specialButton: { label: "Create your Shop", link: "#" },
  },
  {
    title: "Docs and help",
    buttons: [
      { image: <HeadphonesIcon />, label: "Support", link: "#" },
      { image: <FileIcon />, label: "Documentation", link: "#" },
    ],
  },
];

export default function Navbar() {
  return (
    <div className="w-[20%] rounded-l-[0px] rounded-r-[20px] bg-gradient-3">
      <div className="my-10 inline-flex w-full flex-col items-center justify-center gap-2">
        <FullLogo
          width={37}
          text_size={20}
          className="flex flex-col items-center"
        />
      </div>

      {categories.map((category, index) => (
        <div
          className="flex w-full flex-col items-start gap-[4px] px-[14px]"
          key={index}
        >
          {category.title && (
            <p className="font-public-sans gap-[10px] self-stretch px-[16px] pb-[16px] pt-[20px] text-[11px] font-normal normal-case leading-[14px] text-blue-100">
              {category.title}
            </p>
          )}

          {category.buttons && (
            <div className="w-full">
              {category.buttons.map((button, idx) => (
                <a
                  className={clsx(
                    "flex items-center gap-[8px] self-stretch rounded-[6px] px-[16px] py-[9px] text-blue-100",
                    "hover:bg-gradient-4 hover:text-white",
                  )}
                  href={button.link}
                  key={idx}
                >
                  {button.image}
                  <p className="font-public-sans flex-1 text-base font-medium normal-case leading-[22px]">
                    {button.label}
                  </p>
                  {button.label === "Pages" && <Chevron />}
                </a>
              ))}
            </div>
          )}

          {category.specialButton && (
            <a className="special" href={category.specialButton.link}>
              <div className="ml-[16px] flex h-[45px] w-[203px] rotate-[0.255deg] transform items-center justify-center gap-[8px] rounded-[6px] bg-[#0074e4] p-[12px] shadow-[0px_2px_4px_rgba(15,20,34,0.4)]">
                <p className="font-public-sans text-[${Size.base}px] font-medium normal-case leading-[21px] text-white">
                  {category.specialButton.label}
                </p>
              </div>
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
