import Navbar from "@/components/navbar";
import ProfileStore from "@/components/store/1/card";
import Footer from "@/components/store/create/footer";
import Header from "@/components/store/header";

export default function SettingsAccount() {
  return (
    <div className="flex overflow-visible bg-gradient-5 font-satoshi">
      <Navbar />
      <div className="flex w-full flex-col">
        <div className="mx-11">
          <Header />
          <ProfileStore />
        </div>
        <Footer paddingTop={160} name="Plumbwizard" />
      </div>
    </div>
  );
}
