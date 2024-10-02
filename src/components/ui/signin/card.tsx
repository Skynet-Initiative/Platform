"use client";
import isEmailValid from "@/components/tools/verification/email";
import { useState } from "react";
import AnotherOption from "../form/another_option";
import GoogleButton from "../form/buttons/google_sign_in";
import SubmitButton from "../form/buttons/submit";
import CardForm from "../form/card";
import { Label } from "../form/label";

export default function SigninCard() {
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isemailvalid = isEmailValid(email);
    if (!isemailvalid) {
      // Handle invalid email case
    }
  };

  return (
    <CardForm
      title="Welcome back to Skynet 👋"
      subtitle="Please enter your account details."
    >
      <form onSubmit={handleSubmit} className="relative flex flex-col">
        <div className="flex flex-col gap-5">
          <Label
            text="Email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Label type="checkbox">
          <span className="font-satoshi text-sm font-medium leading-5">
            Remember me
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
