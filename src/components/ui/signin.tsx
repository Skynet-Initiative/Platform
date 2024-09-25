import { Bg } from "@/styles/colors";
import PresentationSide from "./presentationSide";
import SigninCard from "./signin/card";

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
      <SigninCard />
    </div>
  );
}
