import Button from "./button";

export default function SubmitButtons() {
  return (
    <div className="flex gap-[16px] px-[24px] pb-[24px]">
      <Button name="Save changes" selected={true} className="p-[10px]" />
      <Button
        name="Cancel"
        className="text-grey-150 bg-white/5 text-[15px] font-medium text-opacity-[.64]"
      />
    </div>
  );
}
