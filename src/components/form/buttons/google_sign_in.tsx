import GoogleIcon from "@/assets/svg/google";

export default function GoogleButton() {
  return (
    <button className="flex h-[2.9375rem] items-center justify-center gap-3 self-stretch rounded-md border border-white/20 bg-white/10 p-2 font-inter text-base font-semibold leading-6 text-white shadow-[0px_1px_2px_rgba(16,24,40,0.05)]">
      <GoogleIcon className="w-[24px] translate-y-[-7.5%]" />
      Sign in with Google
    </button>
  );
}
