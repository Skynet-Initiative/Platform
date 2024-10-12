import CheckboxImage from "@/assets/images/checkbox.png";
import Image from "next/image";
import React from "react";

interface StepsProgressBarProps {
  totalSteps: number; // Nombre total de steps
  currentStep: number; // L'étape actuelle (commence à 1)
}

export const StepsProgressBar = ({
  totalSteps,
  currentStep,
}: StepsProgressBarProps) => {
  const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);

  return (
    <div className="flex gap-8">
      <div className="flex flex-col items-center">
        {steps.map((step) => (
          <React.Fragment key={step}>
            <div
              className={`flex h-[21px] w-[21px] items-center justify-center rounded-full ${
                step < currentStep
                  ? "bg-blue-300"
                  : step === currentStep
                    ? "bg-blue-300"
                    : "bg-white"
              }`}
            >
              <div
                className={`flex h-[10px] w-[10px] items-center justify-center rounded-full ${
                  step < currentStep
                    ? "bg-blue-300"
                    : step === currentStep
                      ? "bg-white"
                      : "bg-white"
                }`}
              >
                {step < currentStep && (
                  <Image src={CheckboxImage} alt="Check" />
                )}
              </div>
            </div>
            {step < totalSteps && (
              <div
                className={`h-[145px] w-[3px] ${
                  step < currentStep ? "bg-blue-300" : "bg-white"
                }`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-col gap-[140px] text-base">
        {steps.map((step) => (
          <p
            key={step}
            className={step === currentStep ? "text-blue-300" : "text-white/50"}
          >
            {step === totalSteps ? "Final Step" : `Step ${step}`}
          </p>
        ))}
      </div>
    </div>
  );
};
