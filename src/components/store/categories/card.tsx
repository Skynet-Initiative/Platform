"use client";
import Input from "@/components//form/input";
import Selector from "@/components/form/selector";
import CategorieRows from "@/components/table/categorie_rows";
import FooterTable from "@/components/table/footer";
import TitleColumn from "@/components/table/title_column";
import ButtonPlus from "../button_plus";
import Table from "../table";

const left = [{ name: "Editor" }];

const categories = [
  {
    productName: "Services",
    productDate: "10 Nov 2023",
    product: 5,
  },
  {
    productName: "Softwares",
    productDate: "10 Nov 2023",
    product: 15,
  },
  {
    productName: "Tools",
    productDate: "10 Nov 2023",
    product: 30,
  },
];

export default function CategorieCard() {
  return (
    <Table
      title="Categories"
      subtitle="In this section you can find the list of all categories"
    >
      <div className="flex flex-col gap-8 py-8">
        <div className="flex justify-between px-6">
          <div className="flex w-[285px] gap-[14px]">
            <Selector
              className="bg-white/5 font-publicsans text-[15px]"
              name="10"
            />
            <ButtonPlus text="New Categorie" />
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
        <div className="flex flex-col">
          <div className="flex justify-between bg-white/5 px-6 py-2">
            <div className="flex h-[35px] flex-shrink-0 items-center gap-[10px] uppercase tracking-[1px]">
              {left.map((item, index) => (
                <TitleColumn key={index} name={item.name} />
              ))}
            </div>
            <div className="flex">
              <TitleColumn name="Editor" className="mr-[80px]" />
              <TitleColumn name="Product" className="mr-[40px]" />
              <TitleColumn name="Actions" />
            </div>
          </div>
          <CategorieRows categories={categories} />
        </div>
        <FooterTable />
      </div>
    </Table>
  );
}
