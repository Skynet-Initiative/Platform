"use client";
import isEmailValid from "@/components/tools/verification/email";
import { useState } from "react";
import AnotherOption from "../form/another_option";
import GoogleButton from "../form/buttons/google_sign_in";
import SubmitButton from "../form/buttons/submit";
import CardForm from "../form/card";
import { Label } from "../form/label";
import LinkUnderline from "../form/link_underline";

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
    <CardForm
      title="Register now 🚀"
      subtitle="Welcome to Skynet! Please enter your details."
    >
      <form onSubmit={handleSubmit} className="relative flex flex-col">
        <div className="flex flex-col gap-5">
          <Label text="Username" type="text" placeholder="Username" />
          <Label
            text="Email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Label type="checkbox">
          <span className="font-sm mb-[-1rem] font-satoshi font-medium leading-5">
            Check here to indicate that you have read and agree to our{" "}
            <LinkUnderline text="Terms of Service" url="#"></LinkUnderline> and{" "}
            <LinkUnderline text="Privacy Policy" url="#"></LinkUnderline>.
          </span>
        </Label>
        <div className="flex flex-col">
          <div className="flex flex-col gap-4">
            <SubmitButton text="Sign in" />
            <GoogleButton />
          </div>
        </div>
        <AnotherOption
          text="Don’t have an account?"
          name_page="Sign up"
          url="#"
        />
      </form>
    </CardForm>
  );
}
