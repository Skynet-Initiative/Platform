import SigninUpCard from "@/components/account/signup/card";
import PresentationSide from "@/components/presentationSide";

export default function Signup() {
  return (
    <div className="flex bg-gradient-1">
      <PresentationSide />
      <SigninUpCard />
    </div>
  );
}
