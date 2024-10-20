import VerticalDotsIcon from "@/assets/svg/crud/dots-vertical";
import EditIcon from "@/assets/svg/crud/edit";
import TrashIcon from "@/assets/svg/crud/trash";

interface IconColumnProps {
  nb_icons?: [number, number]; // Intervalle de deux nombres (ex: [1, 3])
}

export default function IconColumn({ nb_icons = [1, 3] }: IconColumnProps) {
  const allIcons = [
    <EditIcon key="edit" />,
    <TrashIcon key="trash" />,
    <VerticalDotsIcon key="dots" />,
  ];

  // Sélectionner les icônes en fonction de l'intervalle
  const iconsToShow = allIcons.slice(nb_icons[0] - 1, nb_icons[1]);

  return <div className="flex gap-4">{iconsToShow}</div>;
}
