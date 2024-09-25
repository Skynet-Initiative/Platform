import PresentationSide from "@/components/ui/presentationSide";
import SigninUpCard from "@/components/ui/signup/card";
import { Bg } from "@/styles/colors";

export default function Signin() {
  return (
    <div
      style={{
        display: "flex",
        background: Bg.gradient[1],
        transform: "scale(1.1)",
      }}
    >
      <PresentationSide />
      <SigninUpCard />
    </div>
  );
}
