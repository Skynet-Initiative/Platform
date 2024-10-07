import { StepsProgressBar } from "@/components/ui/stepprogressbar";

interface HeadCardProps {
  children: React.ReactNode;
  currentStep: number;
}

export default function HeadCard({ children, currentStep }: HeadCardProps) {
  return (
    <div className="mt-16 flex items-center rounded-[48px] bg-transparent-5">
      <div className="my-8 w-[873px] px-16 font-satoshi">
        <div className="p-6">
          <p className="text-xl/6 font-bold text-white">
            Create your own business
          </p>
          <p className="mt-2 text-white/80">
            Provide data with this form to setup your business.
          </p>
        </div>
        {children}
      </div>
      <StepsProgressBar totalSteps={3} currentStep={currentStep} />
    </div>
  );
}
