"use client";
import IncPP from "@/assets/svg/inc/PP.svg";
import Image from "next/image";
import NbStars from "../nb_stars";
import Review from "./review";

export default function ReviewCard() {
  return (
    <div className="flex flex-col gap-[71px]">
      <div className="mt-[29px] flex justify-start gap-[39px]">
        <Image src={IncPP} alt="" />
        <div className="inline-flex flex-col items-start justify-between">
          <div className="flex h-[62px] flex-col items-start justify-between leading-relaxed">
            <p className="text-xs font-medium text-[#0074e4]">SERVICES</p>
            <p className="text-xl font-bold text-white">Skynet Services</p>
          </div>
          <div className="inline-flex h-[30px] items-start justify-start gap-[19px] text-xs/[33px]">
            <div className="flex items-center justify-center gap-[9px] rounded-md bg-white/10 px-[15px]">
              <span className="font-bold text-[#28c76f]">17</span>
              <span className="font-medium text-white"> Products Sold</span>
            </div>
            <div className="gap-[8.67px] rounded-md bg-white/10 px-[15px] text-center">
              <p className="font-bold text-[#28c76f]">VOUCHES</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[32px]">
        <div className="flex h-[71px] items-center">
          <div className="flex w-[404px] justify-between">
            <p className="text-lg/snug font-bold text-white">
              26 reviews for this store
            </p>
            <NbStars number="4.0" />
          </div>
        </div>
        <div className="flex flex-col gap-[21px]">
          <Review
            name="CreativeDesigner123"
            stars="5.0"
            paragraph={`"I'm incredibly impressed with this digital product store! The variety of products they offer is astounding. From e-books to software, everything is well-curated and top-notch. I recently purchased a graphic design software, and it has revolutionized my creative process. The checkout was seamless, and the download was instant. I'm already browsing for my next purchase. Highly recommended!" - CreativeDesigner123`}
          />
          <Review
            name="AmateurPhotog"
            stars="5.0"
            paragraph={`"5/5 stars for this digital product store! As a tech enthusiast, I'm always on the lookout for unique applications and tools. This store delivered beyond my expectations. I got a fantastic deal on a password manager that has made my online life so much easier. The website's user-friendly interface made browsing and purchasing a breeze. Kudos to the team behind this!" -TechGuru27`}
          />
          <Review
            name="AmateurPhotog"
            stars="5.0"
            paragraph={`"5/5 stars for this digital product store! As a tech enthusiast, I'm always on the lookout for unique applications and tools. This store delivered beyond my expectations. I got a fantastic deal on a password manager that has made my online life so much easier. The website's user-friendly interface made browsing and purchasing a breeze. Kudos to the team behind this!" -TechGuru27`}
          />
          <Review
            name="AmateurPhotog"
            stars="5.0"
            paragraph={`"5/5 stars for this digital product store! As a tech enthusiast, I'm always on the lookout for unique applications and tools. This store delivered beyond my expectations. I got a fantastic deal on a password manager that has made my online life so much easier. The website's user-friendly interface made browsing and purchasing a breeze. Kudos to the team behind this!" -TechGuru27`}
          />
        </div>
      </div>
    </div>
  );
}
