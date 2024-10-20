import Navbar from "@/components/navbar";
import CardStoreCreate2 from "@/components/store/create/2/card";
import Footer from "@/components/store/create/footer";
import Header from "@/components/store/header";

export default function CreatStore2() {
  return (
    <div className="flex overflow-visible bg-gradient-5">
      <Navbar />
      <div className="flex w-full flex-col">
        <div className="mx-11">
          <Header />
          <CardStoreCreate2 />
        </div>
        <Footer paddingTop={160} />
      </div>
    </div>
  );
}
