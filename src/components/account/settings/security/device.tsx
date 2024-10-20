import AndroidIcon from "@/assets/svg/os/Android";
import AppleIcon from "@/assets/svg/os/Apple";
import IphoneIcon from "@/assets/svg/os/IPhone";
import WindowsIcon from "@/assets/svg/os/Windows";

interface DeviceProps {
  os: string;
  device: string;
  location: string;
  date: string;
}

export default function Device(props: DeviceProps) {
  // Map des icônes en fonction du système d'exploitation
  const osIcons: { [key: string]: React.FC } = {
    Windows: WindowsIcon,
    Iphone: IphoneIcon,
    Mac: AppleIcon,
    Android: AndroidIcon,
  };

  // Sélection de l'icône en fonction du système d'exploitation fourni
  const Icon = osIcons[props.os] || null; // Utilisation de l'icône par défaut si non trouvée

  return (
    <div className="flex py-[11px]">
      <div className="flex h-[22px] w-[310px] gap-[10px] px-[20px] py-[11px]">
        {Icon && <Icon />} {/* Vérifie si l'icône existe avant de la rendre */}
        <p className="text-[15px]/snug font-medium text-white/80">
          Chrome on {props.os}
        </p>
      </div>
      <div className="h-[22px] w-[215px] px-[20px] py-[11px]">
        <p className="text-[15px]/snug font-normal text-white/60">
          {props.device}
        </p>
      </div>
      <div className="h-[22px] w-[222px] px-[20px] py-[11px]">
        <p className="text-[15px]/snug font-normal text-white/60">
          {props.location}
        </p>
      </div>
      <div className="h-[22px] w-[199px] px-[20px] py-[11px]">
        <p className="text-[15px]/snug font-normal text-white/80">
          {props.date}
        </p>
      </div>
    </div>
  );
}
