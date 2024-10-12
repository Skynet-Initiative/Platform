interface AnotherOptionProps {
  text: string;
  name_page: string;
  url: string;
}

export default function AnotherOption({
  text,
  name_page,
  url,
}: AnotherOptionProps) {
  return (
    <div className="font-inter mt-8 flex items-baseline justify-center gap-1 self-stretch text-sm leading-5">
      <span className="font-normal text-gray-400">
        {text}{" "}
        <a href={url} className="font-semibold text-white">
          {name_page}
        </a>
      </span>
    </div>
  );
}
