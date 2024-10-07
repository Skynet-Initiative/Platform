import Switcher from "@/components/ui/form/switchers/normal";
import HeadCard from "../head_card";
import Pagination from "../pagination";

export default function CardStoreCreate2() {
  const datas = [
    {
      title: "Orders",
      description: "Receive an email when you make a new sale",
    },
    {
      title: "Feedback",
      description: "Receive an email when a feedback is replied",
    },
    {
      title: "Product Updates",
      description:
        "Get an email when we release new features, updates or anything related to your store. We suggest leaving this enabled to be notified about your business.",
    },
    {
      title: "Store Health",
      description:
        "Receive emails to help you grow your business as well as best practices. Suggestions on how to keep a positive public image for both Skynet and your store.",
    },
  ];

  return (
    <HeadCard currentStep={2}>
      <div className="mx-2 flex w-[534px] flex-col gap-4 p-6 text-base text-blue-100">
        <p className="flex h-6 w-full items-center">Notifications</p>
        {datas.map((item, index) => (
          <div
            key={index}
            className="flex justify-between gap-4 rounded-[10px] bg-white/5"
          >
            <div className="flex flex-col gap-[2px] px-[14px] py-[10px]">
              <p className="text-sm font-medium leading-[22px] text-white">
                {item.title}
              </p>
              <p className="text-[13px]/5 font-normal text-white/80">
                {item.description}
              </p>
            </div>
            <div className="flex items-center px-3 py-1">
              <Switcher />
            </div>
          </div>
        ))}
        <Pagination />
      </div>
    </HeadCard>
  );
}
