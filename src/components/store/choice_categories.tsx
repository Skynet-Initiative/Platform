import clsx from "clsx";
import { useState } from "react";

interface ChoiceCategorieProps {
  categories: string[];
}

export default function ChoiceCategorie({ categories }: ChoiceCategorieProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="flex gap-4 px-6 text-[11px] font-bold uppercase">
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
