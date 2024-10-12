import GoogleImage from "@/assets/svg/google.svg";
import Image from "next/image";

export default function GoogleButton() {
  return (
    <button className="font-inter flex h-[2.9375rem] items-center justify-center gap-3 self-stretch rounded-md border border-white/20 bg-white/10 p-2 text-base font-semibold leading-6 text-white shadow-[0px_1px_2px_rgba(16,24,40,0.05)]">
      <Image
        src={GoogleImage}
        alt="Connect with google"
        width={24}
        className="translate-y-[-7.5%]"
      />
      Sign in with Google
    </button>
  );
}
