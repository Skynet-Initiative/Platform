import ChevronDownImage from "@/assets/svg/chevron-down.svg";
import Logo from "@/assets/svg/logo.svg";
import PageKitImage from "@/assets/svg/navbar/brand-pagekit.svg";
import ComponentsImage from "@/assets/svg/navbar/components.svg";
import FileImage from "@/assets/svg/navbar/file-text.svg";
import GamepadImage from "@/assets/svg/navbar/gamepad.svg";
import HeadphonesImage from "@/assets/svg/navbar/headphones.svg";
import MessageImage from "@/assets/svg/navbar/mobile-message.svg";
import PointImage from "@/assets/svg/navbar/point.svg";
import SettingsImage from "@/assets/svg/navbar/settings.svg";
import ShoppingImage from "@/assets/svg/navbar/shopping.svg";
import UsersImage from "@/assets/svg/navbar/users.svg";
import Image from "next/image";

const categories = [
  {
    title: null,
    buttons: [
      { image: ShoppingImage, label: "Store", link: "#" },
      { image: GamepadImage, label: "Library", link: "#" },
      { image: MessageImage, label: "Comms", link: "#" },
      { image: PageKitImage, label: "Pages", link: "#" },
      { image: ComponentsImage, label: "Pricing", link: "#" },
    ],
  },
  {
    title: "Admin",
    buttons: [
      { image: UsersImage, label: "Users Account", link: "#" },
      { image: SettingsImage, label: "Roles & Permissions", link: "#" },
      { image: PointImage, label: "Datatables", link: "#" },
    ],
  },
  {
    title: "Shop",
    buttons: null,
    specialButton: { label: "Create your Shop", link: "#" },
  },
  {
    title: "Docs and help",
    buttons: [
      { image: HeadphonesImage, label: "Support", link: "#" },
      { image: FileImage, label: "Documentation", link: "#" },
    ],
  },
];

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Image src={Logo} alt="Skynet" width={37} />
        <p className="text">Skynet</p>
      </div>

      {categories.map((category, index) => (
        <div className="categorie" key={index}>
          {category.title && <p className="title">{category.title}</p>}

          {category.buttons && (
            <div className="buttons">
              {category.buttons.map((button, idx) => (
                <a className="button" href={button.link} key={idx}>
                  <Image src={button.image} width={22} alt={button.label} />
                  <p className="text">{button.label}</p>
                  {button.label === "Pages" && (
                    <Image
                      className="chevron"
                      src={ChevronDownImage}
                      width={18}
                      alt=""
                    />
                  )}
                </a>
              ))}
            </div>
          )}

          {category.specialButton && (
            <a className="special" href={category.specialButton.link}>
              <div className="button">
                <p className="text">{category.specialButton.label}</p>
              </div>
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
