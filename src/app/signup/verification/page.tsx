import PresentationSide from "@/components/ui/presentationSide";
import VerifcationEmailCard from "@/components/ui/signup/verification/card";

export default function VerificationSignup() {
  return (
    <div className="flex bg-gradient-1">
      <PresentationSide />
      <VerifcationEmailCard />
    </div>
  );
}
