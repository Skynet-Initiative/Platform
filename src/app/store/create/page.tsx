import Navbar from "@/components/ui/navbar";
import CardStoreCreate from "@/components/ui/store/create/card";
import Footer from "@/components/ui/store/create/footer";
import Header from "@/components/ui/store/create/header";

export default function CreatStore() {
  return (
    <div className="flex overflow-visible bg-gradient-5">
      <Navbar />
      <div className="flex w-full flex-col">
        <div className="mx-11">
          <Header />
          <CardStoreCreate />
        </div>
        <Footer paddingTop={160} />
      </div>
    </div>
  );
}
