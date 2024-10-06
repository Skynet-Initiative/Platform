import BottomShapeImage from "@/assets/svg/bottom-shape.svg";
import FacebookLogo from "@/assets/svg/contacts/Facebook.svg";
import InstagramLogo from "@/assets/svg/contacts/Instagram.svg";
import TwitterLogo from "@/assets/svg/contacts/Twitter.svg";
import TopShapeImage from "@/assets/svg/top-shape.svg";
import FullLogo from "@/components/ui/fullLogo";
import Image from "next/image";

export default function TemplateSignup() {
  return (
    <div className="flex h-[1500px] w-screen items-center justify-center bg-gradient-1">
      <div className="flex w-[455px] flex-col gap-6 bg-transparent-4 p-8">
        <div className="flex items-center justify-center gap-2 py-[10px]">
          <FullLogo width={39} text_size={26} />
        </div>
        <div className="flex flex-col gap-[26px]">
          <div className="flex flex-col gap-[6px]">
            <div className="flex flex-col text-[22px] font-bold text-white">
              <p>
                Hey,
                <br />
                <span className="text-blue-300">Username!</span>
              </p>
            </div>
            <div className="flex flex-col gap-9 text-[15px] text-grey-100">
              <p>
                Please verify your email address by clicking the below button
                and join our creative community, start exploring the resources
                or showcasing your work.
              </p>
              <p>
                If you did not sign up to Skynet, please ignore this email or
                contact us at support@example.com
              </p>
            </div>
          </div>
          <p className="text-[13px] font-normal text-blue-300">
            https://Skynet.me?verification_url
          </p>
          <div className="flex h-[40px] w-[205px] items-center justify-center rounded-lg bg-blue-300 text-white">
            <p>Verify Email Now →</p>
          </div>
          <div className="text h-[1px] w-full bg-[#434968]"></div>
          <div>
            <p className="text-sm font-normal text-grey-100">
              Not sure why you received this email? Please{" "}
              <span className="text-blue-300 underline underline-offset-4">
                let us know.
              </span>
            </p>
          </div>
          <div className="text-sm text-grey-100">
            <p>Thanks.</p>
            <p>The Skynet Team</p>
          </div>
          <div className="flex justify-center">
            <div className="flex gap-[10px]">
              <Image src={FacebookLogo} alt="" width={39} height={39} />
              <Image src={TwitterLogo} alt="" width={39} height={39} />
              <div className="flex h-[39px] w-[39px] items-center justify-center rounded-md bg-gradient-to-r from-[#35233f] to-[#3c2e35]">
                <Image src={InstagramLogo} alt="" width={18} height={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={BottomShapeImage}
        alt=""
        className="z absolute left-[57.5%] top-[133%]"
      />
      <Image
        src={TopShapeImage}
        alt=""
        className="absolute left-[32.5%] top-[50%]"
      />
    </div>
  );
}
