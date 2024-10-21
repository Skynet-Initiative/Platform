import Image from "next/image";

interface ContactButtonProps {
  image: any;
  name: string;
}

export default function ContactButton(props: ContactButtonProps) {
  return (
    <div className="inline-flex h-[27px] w-[111px] items-center justify-start gap-2.5 rounded-xl bg-white/20 py-[3.25px] pl-[3.25px] pr-[23px] shadow">
      <div className="flex h-[23px] w-[23px] items-center justify-center gap-2.5 rounded-[50px] bg-white">
        <Image src={props.image} alt="" />
      </div>
      <div className="15px w-[54px] text-center text-[11px] font-medium text-white">
        {props.name}
      </div>
    </div>
  );
}
