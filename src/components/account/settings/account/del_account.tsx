import { Checkbox } from "@/components/form/checkbox";

export default function DeleteAccount() {
  return (
    <div className="flex flex-col rounded-[6px] bg-white/5 text-white">
      <div className="p-6">
        <p>Delete Account</p>
      </div>
      <div className="flex flex-col gap-[22px] px-[24px]">
        <div className="inline-flex h-[92px] items-center justify-start rounded-md border border-[#ff9f43]/20 bg-[#ff9f43]/20">
          <div className="inline-flex shrink grow basis-0 flex-col items-start justify-center gap-2.5 self-stretch px-[15px] py-3 font-medium text-[#ff9f43]">
            <p className="self-stretch text-lg leading-normal">
              Are you sure you want to delete your account?
            </p>
            <p className="self-stretch text-[15px] leading-snug">
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
          </div>
        </div>
        <div className="inline-flex h-[22px] items-center justify-start gap-[11px]">
          <Checkbox />
          <div className="text-[15px] font-normal leading-snug text-white/50">
            I confirm my account deactivation
          </div>
        </div>
      </div>
      <div className="inline-flex h-[88px] items-end justify-start gap-4 p-6">
        <div className="inline-flex items-center justify-start rounded-md bg-[#ea5455] px-5 py-2.5 text-[15px] font-medium tracking-wide text-white shadow">
          <p>Deactivate Account</p>
        </div>
      </div>
    </div>
  );
}
