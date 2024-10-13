import { Product, ProductRow } from "./product_row";

interface ProductListProps {
  products: Product[];
}

export default function ProductRows({ products }: ProductListProps) {
  return (
    <>
      {products.map((product, index) => (
        <ProductRow
          key={index}
          productName={product.productName}
          productDate={product.productDate}
          productId={product.productId}
          stock={product.stock}
        />
      ))}
    </>
  );
}
