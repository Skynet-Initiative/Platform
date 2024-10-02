import UploadImage from "@/assets/svg/upload.svg";
import Image from "next/image";
import { Label } from "../../form/label";
import { StepsProgressBar } from "../../stepprogressbar";

export default function CardStoreCreate() {
  return (
    <div className="mt-16 flex items-center rounded-[48px] bg-transparent-5">
      <div className="my-8 w-[873px] px-16 font-satoshi">
        <div className="p-6">
          <p className="text-xl/6 font-bold text-white">
            Create your own business
          </p>
          <p className="mt-2 text-white/80">
            Provide data with this form to setup your business.
          </p>
        </div>
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
            <div className="text-medium my-2 flex w-full flex-wrap gap-[35px] text-[15px]">
              <a
                href="#"
                className="flex flex-1 items-center justify-center rounded-md bg-[rgba(255,255,255,0.10)] py-[10px] text-[rgba(255,255,255,0.70)]"
              >
                <p>Previous</p>
              </a>
              <a
                href="#"
                className="flex flex-1 items-center justify-center rounded-md bg-blue-300 py-[10px] text-white"
              >
                <p>Next</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <StepsProgressBar totalSteps={3} currentStep={1} />
    </div>
  );
}
