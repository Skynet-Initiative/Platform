import { Categorie, CategorieRow } from "./categorie_row";

interface ProductListProps {
  categories: Categorie[];
}

export default function CategorieRows({ categories }: ProductListProps) {
  return (
    <>
      {categories.map((categorie, index) => (
        <CategorieRow
          key={index}
          productName={categorie.productName}
          productDate={categorie.productDate}
          product={categorie.product}
        />
      ))}
    </>
  );
}
