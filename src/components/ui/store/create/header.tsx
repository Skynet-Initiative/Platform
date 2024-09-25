import ChevronDownImage from "@/assets/svg/chevron-down.svg";
import EnglishFlag from "@/assets/svg/english_flag.svg";
import MoonImage from "@/assets/svg/moon.svg";
import NotificationImage from "@/assets/svg/notification.svg";
import ProfileImage from "@/assets/svg/profile.svg";
import SearchIcon from "@/assets/svg/search.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="header">
      <div className="search">
        <Image src={SearchIcon} alt="" />
        <input type="text" placeholder="Search..." />
      </div>

      <div className="setting_bar">
        <div className="choice_country">
          <Image src={EnglishFlag} alt="" />
          <span className="name"></span>
          <Image src={ChevronDownImage} alt="" />
        </div>

        <div className="switch_mode">
          <div className="circle">
            <Image src={MoonImage} alt="" />
          </div>
        </div>

        <Image src={NotificationImage} alt="" />
        <Image src={ProfileImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
