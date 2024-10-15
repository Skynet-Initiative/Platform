import SettingsAcount from "@/components/account/settings/account/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/store/create/footer";
import Header from "@/components/store/create/header";

export default function CreatStore() {
  return (
    <div className="flex overflow-visible bg-gradient-5">
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
