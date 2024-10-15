import VerifcationEmailCard from "@/components/account/signup/verification/card";
import PresentationSide from "@/components/presentationSide";

export default function VerificationSignup() {
  return (
    <div className="flex bg-gradient-1">
      <PresentationSide />
      <VerifcationEmailCard />
    </div>
  );
}
