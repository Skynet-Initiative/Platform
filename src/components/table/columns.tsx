import TitleColumn from "@/components/table/title_column";

interface SectionItem {
  name: string;
}

interface ColumnsProps {
  sections: {
    left: SectionItem[];
    center?: string[]; // La section `center` est facultative
    right: string[];
  };
}

const ProductColumns = ({ sections }: ColumnsProps) => {
  const { left, center = [], right } = sections;

  return (
    <div className="flex justify-between bg-white/5 px-6 py-2">
      <div className="flex h-[35px] flex-shrink-0 items-center gap-[10px] uppercase tracking-[1px]">
        {left.map((item, index) => (
          <TitleColumn key={index} name={item.name} />
        ))}
      </div>
      <div className="flex gap-5">
        {center.map((name, index) => (
          <TitleColumn key={index} name={name} />
        ))}
      </div>
      <div className="flex gap-5">
        {right.map((name, index) => (
          <TitleColumn key={index} name={name} />
        ))}
      </div>
    </div>
  );
};

export default ProductColumns;
