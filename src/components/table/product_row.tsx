import CrudColumn from "@/components/table/columns/crud";
import PriceColumn from "@/components/table/columns/price";
import StockColumn from "@/components/table/columns/stock";
import ProductInfos from "@/components/table/product_infos";
import ProfilePP from "@/components/table/profile_pp";

interface RowProps {
  productName: string;
  productDate: string;
  productId: string;
  stock: number;
}

const ProductRow: React.FC<RowProps> = ({
  productName,
  productDate,
  productId,
  stock,
}) => {
  return (
    <div className="flex h-[81px] w-full items-center justify-between px-6">
      <ProductInfos name={productName} date={productDate} />
      <div className="flex items-center gap-[30px]">
        <p className="text-[15px]/[22px] text-blue-300">#{productId}</p>
        <ProfilePP />
      </div>
      <div className="flex w-[270px] justify-between">
        <StockColumn stock={stock} />
        <PriceColumn />
        <CrudColumn />
      </div>
    </div>
  );
};

export default ProductRow;
