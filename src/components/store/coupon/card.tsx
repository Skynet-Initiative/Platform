"use client";
import PlusIcon from "@/assets/svg/plus";
import Button from "@/components/account/settings/button";
import FooterTable from "@/components/table/footer";
import Table from "../table";
import CouponList from "./columns";
import CouponsColumns from "./title_columns";

const coupons = [
  {
    code: 5049,
    discount: 50,
    product: 4,
    active: true,
    used: 46,
  },
  {
    code: 5049,
    discount: 50,
    product: 5,
    active: false,
    used: 0,
  },
  {
    code: 5049,
    discount: 50,
    product: 5,
    active: false,
    used: 1,
  },
];

export default function CouponCard() {
  return (
    <Table
      title="Coupon"
      subtitle="In this section you can find the list of all coupons"
    >
      <div className="flex flex-col gap-8 py-8">
        <div className="flex px-[24px]">
          <Button Icon={PlusIcon} name="New Coupons" selected={true} gap={6} />
        </div>
        <div>
          <CouponsColumns />
          <CouponList coupons={coupons} />
        </div>
        <FooterTable />
      </div>
    </Table>
  );
}
