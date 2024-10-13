import PlusImage from "@/assets/svg/plus.svg";
import Image from "next/image";

interface ButtonPlusProps {
  text: string;
}

export default function ButtonPlus({ text }: ButtonPlusProps) {
  return (
    <a href="#">
      <div className="flex h-10 w-[175px] flex-shrink-0 items-center justify-center gap-1 rounded-md bg-blue-300 text-white">
        <Image src={PlusImage} alt="Plus Icon" />
        {text}
      </div>
    </a>
  );
}
