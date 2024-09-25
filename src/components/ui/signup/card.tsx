"use client";
import GoogleImage from "@/assets/svg/google.svg";
import isEmailValid from "@/components/tools/verification/email";
import { Blue, Grey, White } from "@/styles/colors";
import { Size, Weight } from "@/styles/variables";
import Image from "next/image";
import { useState } from "react";
import { Checkbox } from "../form/checkbox";
import { Label } from "../form/label";

export default function SigninCard() {
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isemailvalid = isEmailValid(email);
    if (!isemailvalid) {
    }
  };

  return (
    <div style={{ width: "40%", height: "100vh" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "17px",
          backgroundColor: White.transparent[1],
        }}
      >
        <div style={{ width: "25rem" }}>
          <div
            style={{
              display: "flex",
              padding: "0.625rem 0rem",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "1.125rem",
              marginBottom: "1.5rem",
            }}
          >
            <h4
              style={{
                color: "#FFF",
                fontFamily: '"Inter", sans-serif',
                fontSize: "1.875rem",
                fontStyle: "normal",
                fontWeight: Weight.semiBold,
                lineHeight: "2.375rem",
              }}
            >
              Register now 🚀
            </h4>
            <span
              style={{
                fontSize: Size.xs,
                fontFamily: '"Inter", sans-serif',
                fontWeight: Weight.normal,
                color: Grey[1],
              }}
            >
              Welcome to Skynet! Please enter your details.
            </span>
          </div>
          <form
            onSubmit={handleSubmit}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <Label
                text="Username"
                type="text"
                placeholder="Username"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label
                text="Email"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: "0.5rem",
                color: Grey[1],
                fontSize: Size.xs,
                margin: "24px 0px",
                flex: 1,
              }}
            >
              <span
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontStyle: "normal",
                  fontWeight: Weight.medium,
                  lineHeight: "1.25rem",
                  marginBottom: "-1.25rem",
                }}
              >
                Check here to indicate that you have read and agree to our{" "}
                <a
                  style={{
                    textDecorationLine: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  style={{
                    textDecorationLine: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  Privacy Policy
                </a>
                .
              </span>
              <Checkbox />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <button
                  type="submit"
                  style={{
                    display: "flex",
                    height: "2.8125rem",
                    padding: "0.5625rem 1.25rem",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5rem",
                    alignSelf: "stretch",
                    backgroundColor: Blue[2],
                    borderRadius: "0.375rem",
                    boxShadow: "0px 2px 4px 0px rgba(15, 20, 34, 0.40)",
                    color: "white",
                    fontWeight: Weight.medium,
                    fontSize: Size.sm,
                  }}
                >
                  Sign in
                </button>
                <button
                  style={{
                    display: "flex",
                    height: "2.9375rem",
                    padding: "0.625rem 1rem",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.75rem",
                    alignSelf: "stretch",
                    borderRadius: "0.5rem",
                    border: "1px solid " + White.transparent[3],
                    background: White.transparent[2],
                    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                    color: "#FFF",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1rem",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "1.5rem",
                  }}
                >
                  <Image
                    src={GoogleImage}
                    alt="Connect with google"
                    width={24}
                    style={{ transform: "translateY(-7.5%)" }}
                  />
                  Sign in with Google
                </button>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "baseline",
                  gap: "0.25rem",
                  alignSelf: "stretch",
                  marginTop: "2rem",
                  fontFamily: "Inter, sans-serif",
                  fontSize: Size.xs,
                  fontStyle: "normal",
                  lineHeight: "1.25rem",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    color: Grey[1],
                    fontWeight: Weight.normal,
                  }}
                >
                  Don&apos;t have an account?{" "}
                  <a
                    href="#"
                    style={{
                      color: "#FFF",
                      fontWeight: Weight.semiBold,
                    }}
                  >
                    Sign up
                  </a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
