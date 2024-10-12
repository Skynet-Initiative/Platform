"use client";
import PlusImage from "@/assets/svg/plus.svg";
import Input from "@/components//form/input";
import Selector from "@/components/form/selector";
import SortedChevron from "@/components/SortedChevron";
import PaginationNumber from "@/components/table/pagination";
import ProductRow from "@/components/table/product_row";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const sections = {
  left: [{ name: "Product" }],
  center: ["Id", "Editor"],
  right: ["Stock", "Price", "Actions"],
};

const categories = ["All products", "Services", "Softwares", "Tools"];

interface SectionProps {
  name: string;
}

const Section = ({ name }: SectionProps) => (
  <div className="flex h-[35px] flex-shrink-0 items-center gap-[10px] uppercase tracking-[1px]">
    <p className="text-[13px] font-normal">{name}</p>
    <SortedChevron />
  </div>
);

export default function ProductCard() {
  const [selectedCategory, setSelectedCategory] = useState("All products");

  return (
    <div className="rounded-[6px] bg-white/5 font-satoshi text-white">
      <div className="gap-[15px] px-6 py-6">
        <p className="text-[20px]/[24px] font-[700]">Product</p>
        <div className="flex h-[45px] items-center text-[15px]/[24px] font-normal text-white/80">
          <p>In this section you can find all of your products</p>
        </div>
      </div>
      <div className="flex flex-col gap-8 py-8">
        <div className="flex justify-between px-6">
          <div className="flex w-[285px] gap-[14px]">
            <Selector
              className="bg-white/5 font-publicsans text-[15px]"
              name="10"
            />
            <div className="flex h-10 w-[175px] flex-shrink-0 items-center justify-center gap-1 rounded-md bg-blue-300">
              <Image src={PlusImage} alt="" />
              <a href="#" className="text-white">
                Create Product
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <Input
              placeholder="Search Product"
              type="text"
              name="search_product"
            />
            <Selector
              className="bg-white/5 text-[15px] text-white/80"
              name="Select Status"
              width={155}
              width_image="30"
            />
          </div>
        </div>
        <div className="flex gap-4 px-6 text-[11px] font-bold uppercase">
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => setSelectedCategory(category)} // Met à jour la catégorie sélectionnée au clic
              className={clsx(
                "cursor-pointer rounded-xl px-5 py-2",
                category === selectedCategory
                  ? "bg-blue-300/20 text-blue-300" // Styles pour l'élément sélectionné
                  : "bg-white/5",
              )}
            >
              <p>{category}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between bg-white/5 px-6 py-2">
            <div className="flex h-[35px] flex-shrink-0 items-center gap-[10px] uppercase tracking-[1px]">
              {sections.left.map((item, index) => (
                <Section key={index} name={item.name} />
              ))}
            </div>
            <div className="flex gap-5">
              {sections.center.map((name, index) => (
                <Section key={index} name={name} />
              ))}
            </div>
            <div className="flex gap-5">
              {sections.right.map((name, index) => (
                <Section key={index} name={name} />
              ))}
            </div>
          </div>
          <ProductRow
            productName="Skyhost"
            productDate="10 Nov 2023"
            productId="5089"
            stock={5}
          />
          <ProductRow
            productName="Skytest"
            productDate="10 Nov 2023"
            productId="5089"
            stock={15}
          />
          <ProductRow
            productName="Skytest2"
            productDate="10 Nov 2023"
            productId="5089"
            stock={30}
          />
        </div>
        <div className="mx-6 flex justify-between">
          <p className="text-[13px]/[20px] text-white/60">
            Showing 1 of 7 pages of 100 products
          </p>
          <PaginationNumber />
        </div>
      </div>
    </div>
  );
}
