"use client";
import PlusImage from "@/assets/svg/plus.svg";
import UploadImage from "@/assets/svg/upload.svg";
import Selector from "@/components/ui/form/selector";
import Switcher from "@/components/ui/form/switchers/normal";
import Image from "next/image";

const Tests = () => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-11 bg-gradient-1">
      <div className="mx-4 my-4 flex w-auto gap-4 rounded-[10px] bg-transparent-5">
        <div className="flex w-[450px] flex-col gap-0.5 px-3.5 py-2.5 font-satoshi">
          <p className="text-sm font-medium leading-snug text-white">
            Store Health
          </p>
          <p className="text-[13px] font-normal leading-tight text-white/80">
            Receive emails to help you grow your business as well as best
            practices. Suggestions on how to keep a positive public image for
            both Skynet and your store.
          </p>
        </div>
        <div className="mx-3 my-1 flex items-center">
          <div className="flex h-6 w-12 items-center">
            <Switcher />
          </div>
        </div>
      </div>
      <div>
        {" "}
        <p className="font-satoshi text-xl font-bold leading-normal text-white">
          Create your own business
        </p>
        <p className="flex h-11 items-center font-satoshi text-[15px] font-normal leading-normal text-white/80">
          Provide data with this form to setup your business.
        </p>
      </div>
      <div className="flex w-[535px] flex-col gap-[25px]">
        <div className="inline-flex w-full flex-col items-start justify-start gap-2.5">
          <div className="h-6 font-satoshi text-base font-medium leading-normal text-white/60">
            Currency
          </div>
          <div className="inline-flex h-10 w-full items-center justify-start rounded-lg bg-white/10">
            <Selector name="EUR" />
          </div>
        </div>
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
        <div className="text-medium my-[88px] flex w-full flex-wrap gap-[35px] text-[15px]">
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
      <div className="w-[535px]">
        <div className="mx-6 flex justify-between">
          <div className="flex gap-3">
            <Selector
              name="10"
              className="bg-[rgba(255,255,255,0.05)] font-regular"
              font="sans"
              font_size="16"
              width={50}
            />
            <div className="flex h-10 w-[175px] items-center justify-center gap-1 rounded-md bg-blue-300">
              <Image src={PlusImage} alt="" />
              <a href="" className="text-white">
                Create Product
              </a>
            </div>
          </div>
          <div></div>
        </div>
        <div className="my-6 gap-8">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Tests;
