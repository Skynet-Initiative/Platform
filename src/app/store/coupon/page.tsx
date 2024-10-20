import Navbar from "@/components/navbar";
import CouponCard from "@/components/store/coupon/card";
import Footer from "@/components/store/create/footer";
import Header from "@/components/store/header";

export default function CreatStore() {
  return (
    <div className="flex overflow-visible bg-gradient-5">
      <Navbar />
      <div className="flex w-full flex-col">
        <div className="mx-11">
          <Header />
          <CouponCard />
        </div>
        <Footer paddingTop={160} />
      </div>
    </div>
  );
}
