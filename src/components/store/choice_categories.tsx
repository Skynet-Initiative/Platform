import clsx from "clsx";
import { useState } from "react";

interface ChoiceCategorieProps {
  categories: string[];
  className?: string; // Ajout de la propriété className
}

export default function ChoiceCategorie({
  categories,
  className,
}: ChoiceCategorieProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div
      className={clsx(
        "flex gap-4 px-6 text-[11px] font-bold uppercase text-white",
        className,
      )}
    >
      {categories.map((category) => (
        <div
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={clsx(
            "cursor-pointer rounded-xl px-5 py-2",
            category === selectedCategory
              ? "bg-blue-300/20 text-blue-300"
              : "bg-white/5",
          )}
        >
          <p>{category}</p>
        </div>
      ))}
    </div>
  );
}
