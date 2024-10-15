import PlusIcon from "@/assets/svg/plus";

interface ButtonPlusProps {
  text: string;
}

export default function ButtonPlus({ text }: ButtonPlusProps) {
  return (
    <a href="#">
      <div className="flex h-10 w-[175px] flex-shrink-0 items-center justify-center gap-1 rounded-md bg-blue-300 text-white">
        <PlusIcon />
        {text}
      </div>
    </a>
  );
}
