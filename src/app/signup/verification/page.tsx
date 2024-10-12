import PresentationSide from "@/components/presentationSide";
import VerifcationEmailCard from "@/components/signup/verification/card";

export default function VerificationSignup() {
  return (
    <div className="flex bg-gradient-1">
      <PresentationSide />
      <VerifcationEmailCard />
    </div>
  );
}
