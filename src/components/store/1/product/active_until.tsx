interface ActiveUntilProps {
  date: string;
}

export default function ActiveUntil(props: ActiveUntilProps) {
  return (
    <div className="inline-flex h-[26px] items-center justify-start gap-2.5">
      <div className="h-2.5 w-2.5 rounded-full bg-[#d9d9d9]" />
      <div className="text-sm font-bold leading-[21px] text-white opacity-80">
        Active until {props.date}
      </div>
    </div>
  );
}
