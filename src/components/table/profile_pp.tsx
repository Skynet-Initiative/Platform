import clsx from "clsx";

interface ProfilePPProps {
  className?: string; // Argument optionnel
}

export default function ProfilePP({ className }: ProfilePPProps) {
  return (
    <div
      className={clsx("flex items-center justify-center gap-[10px]", className)}
    >
      <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-blue-300 bg-opacity-[.16] font-semibold uppercase text-blue-300">
        <p>pp</p>
      </div>
      <p>Username</p>
    </div>
  );
}
