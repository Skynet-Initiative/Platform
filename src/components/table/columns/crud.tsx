import VerticalDotsLogo from "@/assets/svg/crud/dots-vertical.svg";
import EditLogo from "@/assets/svg/crud/edit.svg";
import TrashLogo from "@/assets/svg/crud/trash.svg";
import Image from "next/image";

export default function CrudColumn() {
  return (
    <div className="flex gap-4">
      <Image src={EditLogo} alt="" />
      <Image src={TrashLogo} alt="" />
      <Image src={VerticalDotsLogo} alt="" />
    </div>
  );
}
