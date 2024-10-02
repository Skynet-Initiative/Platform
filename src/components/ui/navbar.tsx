"use client";

import Chevron from "@/assets/svg/chevron";
import Logo from "@/assets/svg/logo.svg";
import PageKitImage from "@/assets/svg/navbar/brand-pagekit.svg";
import ComponentsImage from "@/assets/svg/navbar/components.svg";
import FileImage from "@/assets/svg/navbar/file-text.svg";
import GamepadImage from "@/assets/svg/navbar/gamepad.svg";
import HeadphonesImage from "@/assets/svg/navbar/headphones.svg";
import MessageImage from "@/assets/svg/navbar/mobile-message.svg";
import PointImage from "@/assets/svg/navbar/point.svg";
import SettingsImage from "@/assets/svg/navbar/settings.svg";
import ShoppingImage from "@/assets/svg/navbar/shopping.svg";
import UsersImage from "@/assets/svg/navbar/users.svg";
import { Bg } from "@/styles/colors";
import Image from "next/image";

const categories = [
  {
    title: null,
    buttons: [
      { image: ShoppingImage, label: "Store", link: "#" },
      { image: GamepadImage, label: "Library", link: "#" },
      { image: MessageImage, label: "Comms", link: "#" },
      { image: PageKitImage, label: "Pages", link: "#" },
      { image: ComponentsImage, label: "Pricing", link: "#" },
    ],
  },
  {
    title: "Admin",
    buttons: [
      { image: UsersImage, label: "Users Account", link: "#" },
      { image: SettingsImage, label: "Roles & Permissions", link: "#" },
      { image: PointImage, label: "Datatables", link: "#" },
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
      { image: HeadphonesImage, label: "Support", link: "#" },
      { image: FileImage, label: "Documentation", link: "#" },
    ],
  },
];

export default function Navbar() {
  return (
    <div className="w-[20%] rounded-l-[0px] rounded-r-[20px] bg-gradient-3">
      <div className="my-10 inline-flex w-full flex-col items-center justify-center gap-2">
        <Image src={Logo} alt="Skynet" width={37} />
        <p className="font-satoshi text-[20px] font-bold normal-case leading-[22px] text-white">
          Skynet
        </p>
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
                  className="flex items-center gap-[8px] self-stretch px-[16px] py-[9px]"
                  href={button.link}
                  key={idx}
                >
                  <style jsx>{`
                    a:hover {
                      border-radius: 6px;
                      background: ${Bg.gradient[4]};
                    }
                  `}</style>
                  <Image src={button.image} width={22} alt={button.label} />
                  <p className="font-public-sans flex-1 text-base font-medium normal-case leading-[22px] text-blue-100">
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
