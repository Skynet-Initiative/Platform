import PresentationSide from "./presentationSide";
import SigninCard from "./signin/card";

export default function Signin() {
  return (
    <div className="flex bg-gradient-1">
      <PresentationSide />
      <SigninCard />
    </div>
  );
}
