import IconColumn from "@/components/table/columns/crud";
import Status from "./status";

interface Coupon {
  code: number;
  discount: number;
  product: number;
  active: boolean;
  used: number;
}

interface CouponListProps {
  coupons: Coupon[];
}

export default function CouponList(props: CouponListProps) {
  return (
    <div>
      {props.coupons.map((coupon, index) => (
        <div key={index} className="flex h-[81px] items-center justify-around">
          <p className="w-[80px] text-[15px]/snug text-[#0074e4]">
            #{coupon.code}
          </p>
          <p className="w-[370px] px-[20px] font-sans text-[15px]/snug font-semibold text-white/70">
            {coupon.discount}%
          </p>
          <p className="w-[151px] px-[30px] text-[15px]/snug font-normal text-white/70">
            {coupon.product}
          </p>
          <div className="w-[120px]">
            <Status active={coupon.active} />
          </div>
          <p className="w-[151px] px-[15px] text-[15px]/snug text-white/70">
            {coupon.used}
          </p>
          <div className="flex w-[120px] justify-center">
            <IconColumn nb_icons={[1, 2]} />
          </div>
        </div>
      ))}
    </div>
  );
}
