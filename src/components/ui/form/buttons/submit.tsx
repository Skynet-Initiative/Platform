interface SubmitButtonProps {
  text: string;
}

export default function SubmitButton({ text }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="flex h-[2.8125rem] items-center justify-center gap-2 self-stretch rounded-md bg-blue-600 p-2 text-[15px] font-medium text-white shadow-[0px_2px_4px_rgba(15,20,34,0.40)]"
    >
      {text}
    </button>
  );
}
