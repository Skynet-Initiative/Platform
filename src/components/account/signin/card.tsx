"use client";
import AnotherOption from "@/components/form/another_option";
import GoogleButton from "@/components/form/buttons/google_sign_in";
import SubmitButton from "@/components/form/buttons/submit";
import CardForm from "@/components/form/card";
import { Label } from "@/components/form/label";
import isEmailValid from "@/tools/verification/email";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SigninCard() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (!isEmailValid(email)) {
      setErrorEmail("The email is incorrect!");
      return;
    } else {
      setErrorEmail("");
      router.push("/dashboard");
    }
  };

  return (
    <CardForm
      title="Welcome back to Skynet 👋"
      subtitle="Please enter your account details."
    >
      <form onSubmit={handleSubmit} className="relative flex flex-col">
        <div className="flex flex-col gap-5">
          <div>
            <Label
              text="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              if_error={!!errorEmail}
            />
            {errorEmail && (
              <span className="text-[15px] text-red-400">{errorEmail}</span>
            )}
          </div>
        </div>
        <Label
          type="checkbox"
          value={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
          submit={submitted}
        >
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
          url="/signup"
        />
      </form>
    </CardForm>
  );
}
