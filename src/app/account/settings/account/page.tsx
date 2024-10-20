import SettingsAcount from "@/components/account/settings/account/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/store/create/footer";
import Header from "@/components/store/header";

export default function SettingsAccount() {
  return (
    <div className="flex overflow-visible bg-gradient-5 font-satoshi">
      <Navbar />
      <div className="flex w-full flex-col">
        <div className="mx-11">
          <Header />
          <SettingsAcount />
        </div>
        <Footer paddingTop={160} />
      </div>
    </div>
  );
}