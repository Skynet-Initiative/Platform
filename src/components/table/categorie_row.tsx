import ProductInfos from "@/components/table/product_infos";
import ProfilePP from "@/components/table/profile_pp";

import EditIcon from "@/assets/svg/crud/edit";
import TrashIcon from "@/assets/svg/crud/trash";
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
          <EditIcon />
          <TrashIcon />
        </div>
      </div>
    </div>
  );
}
