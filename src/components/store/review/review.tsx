import NbStars from "../nb_stars";

interface ReviewProps {
  name: string;
  stars: string;
  paragraph: string;
}

export default function Review(props: ReviewProps) {
  return (
    <div className="flex flex-col justify-between gap-[26px] rounded-[18px] bg-white/5 px-[24px] py-[41px]">
      <div className="flex gap-[140px]">
        <p className="text-base font-bold leading-loose text-white">
          {props.name}
        </p>
        <NbStars number={props.stars} className="scale-[1.32]" />
      </div>
      <p className="w-[990px] text-[13px]/loose font-medium text-white">
        {props.paragraph}
      </p>
    </div>
  );
}
