import Cube from "@/assets/svg/cube.svg";
import Logo from "@/assets/svg/logo.svg";
import { Blue, Grey } from "@/styles/colors";
import { Size, Weight } from "@/styles/variables";
import Image from "next/image";

export default function PresentationSide() {
  return (
    <div
      style={{
        width: "60%",
        fontFamily: "Satoshi, sans-serif",
        fontWeight: Weight.semiBold,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image src={Logo} alt="Skynet" style={{ zIndex: 2 }} width={40} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "31.625rem",
            height: "27.125rem",
            transform: "rotate(-32.706deg)",
            flexShrink: 0,
            borderRadius: "506px",
            background: "#0d275a",
            filter: "blur(187px)",
          }}
        ></div>
        <Image
          src={Cube}
          alt=""
          style={{
            width: "14.125rem",
            height: "14.6875rem",
            filter: "none",
            position: "absolute",
            bottom: "45%",
            zIndex: 2,
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h4
          style={{
            width: "100%",
            fontWeight: Weight.semiBold,
            fontSize: Size.xl,
            color: "#FFF",
            zIndex: 2,
          }}
        >
          Welcome to the Future of <br /> Digital{" "}
          <span
            style={{
              color: Blue[1],
            }}
          >
            selling
          </span>
        </h4>
        <span
          style={{
            fontSize: Size.xs,
            fontFamily: '"Inter", sans-serif',
            fontWeight: Weight.normal,
            color: Grey[1],
            zIndex: 2,
          }}
        >
          Your Key To Digital Success
        </span>
      </div>
    </div>
  );
}
