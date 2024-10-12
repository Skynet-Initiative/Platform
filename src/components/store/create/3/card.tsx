"use client";

import Input from "@/components/form/input";
import ChoiceStatut from "../choice_statut";
import HeadCard from "../head_card";
import Pagination from "../pagination";

const inputFields = [
  { label: "Username", placeholder: "JohnDo88", name: "username" },
  { label: "Country", placeholder: "France", name: "country" },
  { label: "First name", placeholder: "John", name: "first_name" },
  { label: "Last name", placeholder: "Doe", name: "last_name" },
  { label: "City", placeholder: "New York", name: "city" },
  {
    label: "State / Province / Country",
    placeholder: "New York",
    name: "state",
  },
  {
    label: "Address, House / Building number",
    placeholder: "50 impasse Rainbow Cloud",
    name: "address",
  },
  {
    label: "Additional Address, House / Building number (Optional)",
    placeholder: "Address, House / Building number",
    name: "additional_address",
  },
  {
    label: "Phone Number (Optional)",
    placeholder: "+77541 5484 165484",
    name: "phone_number",
  },
];

const textareaFields = [
  { label: "Business Details (Optional)", placeholder: "Business Details" },
  { label: "Terms of Service", placeholder: "Terms of Service" },
];

export default function CardStoreCreate3() {
  return (
    <HeadCard currentStep={3}>
      <div className="flex flex-col gap-4 p-6 text-white">
        <ChoiceStatut />

        {inputFields.slice(0, 2).map(({ label, placeholder, name }, index) => (
          <div key={index} className="flex flex-col gap-[10px]">
            <p className="text-[13px]">{label}</p>
            <Input type="text" placeholder={placeholder} name={name} />
          </div>
        ))}

        <div className="flex w-full gap-4">
          {inputFields
            .slice(2, 4)
            .map(({ label, placeholder, name }, index) => (
              <div key={index} className="flex w-full flex-col gap-[10px]">
                <p className="text-[13px]">{label}</p>
                <Input type="text" placeholder={placeholder} name={name} />
              </div>
            ))}
        </div>

        <div className="flex w-full gap-4">
          {inputFields
            .slice(4, 6)
            .map(({ label, placeholder, name }, index) => (
              <div key={index} className="flex w-full flex-col gap-[10px]">
                <p className="text-[13px]">{label}</p>
                <Input type="text" placeholder={placeholder} name={name} />
              </div>
            ))}
        </div>

        {textareaFields.map(({ label, placeholder }, index) => (
          <div key={index} className="flex flex-col gap-[10px]">
            <p className="text-[13px]">{label}</p>
            <textarea
              cols={50}
              rows={10}
              placeholder={placeholder}
              className="h-[126px] rounded-md bg-white/10 px-3.5 py-[7px]"
              required
            ></textarea>
            <style jsx>{`
              textarea {
                @apply text-[13px] font-medium leading-6 text-opacity-40;
              }
            `}</style>
          </div>
        ))}

        <Pagination />
      </div>
    </HeadCard>
  );
}
