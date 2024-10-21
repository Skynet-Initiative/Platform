"use client";
import PlusIcon from "@/assets/svg/plus";
import Input from "@/components//form/input";
import Button from "@/components/button";
import Selector from "@/components/form/selector";
import Columns from "@/components/table/columns";
import FooterTable from "@/components/table/footer";
import ProductRows from "@/components/table/product_rows";
import ChoiceCategorie from "../choice_categories";
import Table from "../table";

const sections = {
  left: [{ name: "Product" }],
  center: ["Id", "Editor"],
  right: ["Stock", "Price", "Actions"],
};

const categories = ["All products", "Services", "Softwares", "Tools"];

const products = [
  {
    productName: "Skyhost",
    productDate: "10 Nov 2023",
    productId: "5089",
    stock: 5,
  },
  {
    productName: "Skytest",
    productDate: "10 Nov 2023",
    productId: "5089",
    stock: 15,
  },
  {
    productName: "Skytest2",
    productDate: "10 Nov 2023",
    productId: "5089",
    stock: 30,
  },
];

export default function ProductCard() {
  return (
    <Table
      title="Product"
      subtitle="In this section you can find all of your products"
    >
      <div className="flex flex-col gap-8 py-8">
        <div className="flex justify-between px-6">
          <div className="flex gap-[14px]">
            <Selector className="bg-white/5 font-sans text-[15px]" name="10" />
            <Button
              Icon={PlusIcon}
              name="New Product"
              selected={true}
              gap={3}
            />
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
        <ChoiceCategorie categories={categories} />
        <div className="flex flex-col">
          <Columns sections={sections} />
          <ProductRows products={products} />
        </div>
        <FooterTable />
      </div>
    </Table>
  );
}
