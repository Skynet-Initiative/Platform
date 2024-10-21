import BellIcon from "@/assets/svg/account/bell";
import BillIcon from "@/assets/svg/account/bill";
import SecurityIcon from "@/assets/svg/account/security";
import UsersIcon from "@/assets/svg/navbar/users";
import { usePathname, useRouter } from "next/navigation"; // Utilisez usePathname ici
import { useEffect, useState } from "react";
import Button from "../../button";

interface ButtonsProps {
  children: React.ReactNode;
}

export default function Buttons(props: ButtonsProps) {
  const router = useRouter();
  const pathname = usePathname(); // Obtenez le chemin actuel
  const [selectedButton, setSelectedButton] = useState<string>("");

  const buttons = [
    { name: "Account", path: "/account/settings/account", Icon: UsersIcon },
    {
      name: "Security",
      path: "/account/settings/security",
      Icon: SecurityIcon,
    },
    {
      name: "Notifications",
      path: "/account/settings/notifications",
      Icon: BellIcon,
    },
    {
      name: "Billing & Plans",
      path: "/account/settings/plans",
      Icon: BillIcon,
    },
  ];

  // Fonction pour mettre à jour le titre en fonction de l'URL
  const updateSelectedButton = () => {
    const lastSegment = pathname.split("/").pop();
    const foundButton = buttons.find((button) =>
      button.path.endsWith(lastSegment || ""),
    ); // Trouvez le bouton correspondant
    if (foundButton) {
      setSelectedButton(foundButton.name); // Mettez à jour l'état
    }
  };

  // Utilisez useEffect pour surveiller les changements d'URL
  useEffect(() => {
    updateSelectedButton(); // Mettez à jour le titre au chargement initial
  }, [pathname]); // Dépendance sur le chemin

  const handleButtonClick = (name: string, path: string) => {
    setSelectedButton(name);
    router.push(path); // Changez l'URL
  };

  return (
    <div className="flex flex-col gap-[26px]">
      <div className="flex gap-[10px] text-[22px]/[30px] font-medium text-blue-300">
        <p>Account Settings</p>
        <p>/</p>
        <p className="text-white">{selectedButton}</p>
      </div>
      <div className="flex">
        {buttons.map((button) => (
          <Button
            key={button.name}
            name={button.name}
            selected={selectedButton === button.name}
            gap={8}
            Icon={button.Icon}
            onClick={() => handleButtonClick(button.name, button.path)} // Appel de la fonction avec le nom et le chemin
          />
        ))}
      </div>
      {props.children}
    </div>
  );
}
