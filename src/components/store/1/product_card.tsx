import Image from "next/image";
import ActiveUntil from "./product/active_until";
import ProductInfos from "./product/infos";
import Launch from "./product/launch";
import Stock from "./product/stock";

interface ProductCardProps {
  active_until?: string;
  stock?: number;
  launch?: boolean;
  name: string;
  type: string;
  image: any;
  reduction?: number;
  price: string;
}

export default function ProductCard(props: ProductCardProps) {
  if (props.stock) {
    return (
      <div className="inline-fle flex-col items-start justify-start gap-[21.41px]">
        <Image src={props.image} alt="" />
        <div className="flex flex-col items-start justify-start gap-2.5 self-stretch">
          <ProductInfos name={props.name} type={props.type} />
          <div className="inline-flex w-full items-center justify-between self-stretch">
            <div className="text-sm font-bold text-neutral-100">
              ${props.price}
            </div>
            <Stock number={16} />
          </div>
        </div>
        {props.launch && <Launch />}
      </div>
    );
  }
  if (props.reduction) {
    return (
      <div className="flex flex-col items-start justify-start">
        <Image src={props.image} alt="" />
        <div className="flex flex-col items-start justify-start gap-2.5">
          <ProductInfos name={props.name} type={props.type} />
          <div className="inline-flex h-[26px] items-center justify-start gap-2.5">
            <div className="flex items-center justify-start gap-2.5 rounded bg-[#0074e4] px-2">
              <div className="text-sm font-medium text-white">
                -{props.reduction}%
              </div>
            </div>
            <div className="text-sm font-bold text-neutral-100">
              ${props.price}
            </div>
          </div>
        </div>
        {props.launch && <Launch />}
      </div>
    );
  }
  if (props.active_until) {
    return (
      <div className="flex flex-col items-start justify-start">
        <div className="inline-flex h-[301.89px] w-[233.29px] flex-col items-start justify-start">
          <div className="relative flex">
            {props.launch && <Launch />}
            <Image src={props.image} alt="" />
          </div>
          <div className="flex flex-col items-start justify-start gap-2.5">
            <ProductInfos name={props.name} type={props.type} />
            <ActiveUntil date="Dec 10, 2023" />
          </div>
        </div>
      </div>
    );
  }
}
