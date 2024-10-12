import UploadImage from "@/assets/svg/upload.svg";
import { Label } from "@/components/form/label";
import Image from "next/image";
import HeadCard from "../head_card";
import Pagination from "../pagination";

export default function CardStoreCreate() {
  return (
    <HeadCard currentStep={1}>
      <div className="flex flex-col gap-6 p-6">
        <div className="w-[535px] gap-[11px] text-base/6 font-medium text-white">
          <p>Business Name</p>
          <div className="mt-[11px] flex h-12 items-center rounded-lg bg-white/10 pl-4">
            <input
              type="text"
              placeholder="Shop"
              className="h-6 w-[280px] bg-[rgba(0,0,0,0)] outline-none"
            />
            <p className="border-1 border-l-2 border-solid border-grey-200 pl-1.5 text-[13px] text-grey-100">
              .myskynet.store
            </p>
          </div>
        </div>
        <p className="text-base text-white">Business Logo</p>
        <div className="flex w-[535px] flex-col gap-[25px]">
          <div className="border_dashed flex h-[220px] w-full items-center justify-center font-satoshi text-white">
            <div className="flex flex-col gap-5">
              <div className="flex justify-center">
                <Image src={UploadImage} alt="" />
              </div>
              <div className="flex flex-col items-center gap-[10px]">
                <p className="">Select a file or drag and drop here</p>
                <p className="text-xs font-normal text-white/40">
                  JPG, PNG or PDF, file size no more than 10MB
                </p>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href="#"
                  className="rounded-[5px] bg-blue-300 px-6 py-2 text-xs font-bold"
                >
                  Select file
                </a>
              </div>
            </div>
          </div>
          <Label text="Currency" type="selector" placeholder="EUR" />
          <Label text="Country tax" type="selector" placeholder="0%" />
        </div>
        <Pagination />
      </div>
    </HeadCard>
  );
}
