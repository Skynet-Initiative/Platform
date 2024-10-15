import VerticalDotsIcon from "@/assets/svg/crud/dots-vertical";
import EditIcon from "@/assets/svg/crud/edit";
import TrashIcon from "@/assets/svg/crud/trash";

export default function CrudColumn() {
  return (
    <div className="flex gap-4">
      <EditIcon />
      <TrashIcon />
      <VerticalDotsIcon />
    </div>
  );
}
