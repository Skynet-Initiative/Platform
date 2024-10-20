import Device from "./device";

export default function Devices() {
  return (
    <div className="flex flex-col gap-1 rounded-[20px] bg-white/5 pb-[100px]">
      <div className="p-[24px]">
        <p className="text-lg font-medium leading-normal text-white">
          Recent Devices
        </p>
      </div>
      <div className="flex text-[13px] font-medium uppercase tracking-wide text-white">
        <div className="h-[18px] w-[310px] px-[20px] py-[17.5px]">
          <p>Browser</p>
        </div>
        <div className="h-[18px] w-[219px] px-[20px] py-[17.5px]">
          <p>Device</p>
        </div>
        <div className="h-[18px] w-[219px] px-[20px] py-[17.5px]">
          <p>Location</p>
        </div>
        <div className="h-[18px] w-[219px] px-[20px] py-[17.5px]">
          <p>Recent activities</p>
        </div>
      </div>
      <Device
        os="Windows"
        device="HP Specter 360"
        location="Switzerland"
        date="10, July 2021 20:07"
      />
      <Device
        os="Iphone"
        device="iPhone 12x"
        location="Australia"
        date="13, July 2021 10:10"
      />
      <Device
        os="Android"
        device="OnePlus 9 Pro"
        location="Dubai"
        date="14, July 2021 15:15"
      />
      <Device
        os="Mac"
        device="Apple IMac"
        location="India"
        date="16, July 2021 16:17"
      />
      <Device
        os="Windows"
        device="HP Specter 360"
        location="Switzerland"
        date="10, July 2021 20:07"
      />
      <Device
        os="Android"
        device="OnePlus 9 Pro"
        location="Dubai"
        date="14, July 2021 15:15"
      />
    </div>
  );
}
