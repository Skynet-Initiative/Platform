"use client";
import Discord from "@/assets/svg/contacts/discord.svg";
import Tiktok from "@/assets/svg/contacts/tiktok.svg";
import StorePP from "@/assets/svg/store/PP.svg";
import Product1 from "@/assets/svg/store/products/1.svg";
import Product2 from "@/assets/svg/store/products/2.svg";
import Product3 from "@/assets/svg/store/products/3.svg";
import Product4 from "@/assets/svg/store/products/4.svg";
import Product5 from "@/assets/svg/store/products/5.svg";
import Image from "next/image";
import ChoiceCategorie from "../choice_categories";
import NbStars from "../nb_stars";
import ContactButton from "./button_contact";
import ProductCard from "./product_card";

const categories = ["All products", "MW 2019", "MV 2", "Softwares"];

export default function ProfileStore() {
  return (
    <div>
      <div className="mt-[29px] flex justify-start gap-[39px]">
        <Image src={StorePP} alt="" />
        <div className="inline-flex h-[107.48px] flex-col items-start justify-start gap-[15px]">
          <div className="flex h-[62px] flex-col items-start justify-between leading-relaxed">
            <p className="text-xs font-medium text-[#0074e4]">SERVICES</p>
            <p className="text-xl font-bold text-white">Plumbwizard</p>
          </div>
          <NbStars number="4.0" />
          <div className="inline-flex h-[30px] items-start justify-start gap-[19px] text-xs/[33px]">
            <div className="flex items-center justify-center gap-[9px] rounded-md bg-white/10 px-[15px]">
              <span className="font-bold text-[#28c76f]">17</span>
              <span className="font-medium text-white"> Products Sold</span>
            </div>
            <div className="gap-[8.67px] rounded-md bg-white/10 px-[15px] text-center">
              <p className="font-bold text-[#28c76f]">VOUCHES</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[36px] h-[1px] w-full bg-white/20"></div>
      <div className="my-[24px] flex w-full items-center justify-between">
        <ChoiceCategorie categories={categories} className="gap-[9px] px-0" />
        <div className="flex gap-[10px]">
          <ContactButton image={Tiktok} name="Tik Tok" />
          <ContactButton image={Discord} name="Discord" />
        </div>
      </div>
      <div className="flex flex-col gap-[21px]">
        <div className="flex justify-between">
          <ProductCard
            name="PRODUCT NAME"
            type="SKYNET SERVICES | SERVICE"
            image={Product1}
            price="5.00"
            stock={16}
          />
          <ProductCard
            name="PRODUCT NAME"
            type="SKYNET SERVICES | SERVICE"
            image={Product2}
            price="15.00"
            reduction={20}
          />
          <ProductCard
            name="PRODUCT NAME"
            type="SKYNET SERVICES | SERVICE"
            image={Product3}
            price="15.00"
            reduction={20}
          />
          <ProductCard
            name="PRODUCT NAME"
            type="SKYNET SERVICES | SERVICE"
            image={Product4}
            price="15.00"
            active_until="Dec 10, 2023"
            launch={true}
          />
        </div>
        <div className="flex justify-between">
          <ProductCard
            name="PRODUCT NAME"
            type="SKYNET SERVICES | SERVICE"
            image={Product5}
            price="5.00"
            stock={16}
          />
          <ProductCard
            name="PRODUCT NAME"
            type="SKYNET SERVICES | SERVICE"
            image={Product4}
            price="15.00"
            reduction={20}
          />
          <ProductCard
            name="PRODUCT NAME"
            type="SKYNET SERVICES | SERVICE"
            image={Product1}
            price="15.00"
            reduction={20}
          />
          <ProductCard
            name="PRODUCT NAME"
            type="SKYNET SERVICES | SERVICE"
            image={Product2}
            price="15.00"
            reduction={20}
          />
        </div>
        <div className="flex justify-between">
          <ProductCard
            name="PRODUCT NAME"
            type="SKYNET SERVICES | SERVICE"
            image={Product1}
            price="5.00"
            stock={16}
          />
          <ProductCard
            name="PRODUCT NAME"
            type="SKYNET SERVICES | SERVICE"
            image={Product2}
            price="15.00"
            reduction={20}
          />
          <ProductCard
            name="PRODUCT NAME"
            type="SKYNET SERVICES | SERVICE"
            image={Product4}
            price="15.00"
            reduction={20}
          />
          <ProductCard
            name="PRODUCT NAME"
            type="SKYNET SERVICES | SERVICE"
            image={Product5}
            price="15.00"
            reduction={20}
          />
        </div>
      </div>
    </div>
  );
}
