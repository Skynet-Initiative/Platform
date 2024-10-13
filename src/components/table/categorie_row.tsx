import ProductInfos from "@/components/table/product_infos";
import ProfilePP from "@/components/table/profile_pp";

import EditLogo from "@/assets/svg/crud/edit.svg";
import TrashLogo from "@/assets/svg/crud/trash.svg";
import Image from "next/image";
import StockColumn from "./columns/stock";

export interface Categorie {
  productName: string;
  productDate: string;
  product: number;
}

export function CategorieRow({ productName, productDate, product }: Categorie) {
  return (
    <div className="flex h-[81px] w-full items-center justify-between px-6">
      <ProductInfos name={productName} date={productDate} />
      <div className="flex justify-between">
        <ProfilePP className="mr-[80px]" />
        <StockColumn stock={product} className="mr-[125px]" />
        <div className="flex gap-4">
          <Image src={EditLogo} alt="" />
          <Image src={TrashLogo} alt="" />
        </div>
      </div>
    </div>
  );
}
