import SigninCard from "@/components/account/signin/card";
import PresentationSide from "./presentationSide";

export default function Signin() {
  return (
    <div className="flex bg-gradient-1">
      <PresentationSide />
      <SigninCard />
    </div>
  );
}
