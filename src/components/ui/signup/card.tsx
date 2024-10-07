"use client";
import isEmailValid from "@/components/tools/verification/email";
import { useCheckboxStore, useEmailStore } from "@/tools/store"; // Importe le store Zustand pour l'email
import { useRouter } from "next/router";
import { useState } from "react";
import AnotherOption from "../form/another_option";
import GoogleButton from "../form/buttons/google_sign_in";
import SubmitButton from "../form/buttons/submit";
import CardForm from "../form/card";
import { Label } from "../form/label";
import LinkUnderline from "../form/link_underline";

interface FormData {
  username?: string;
  email?: string;
  rememberMe?: boolean;
}

export default function SignupCard() {
  const router = useRouter();
  const { setEmail } = useEmailStore(); // Utilise Zustand pour l'email global
  const [formData, setFormData] = useState<FormData>({}); // État avec type pour stocker les données du formulaire
  const [errorEmail, setErrorEmail] = useState<string>("");
  const { isChecked } = useCheckboxStore();
  const [submitted, setSubmitted] = useState<boolean>(false);

  const verifyData = () => {
    if (!isEmailValid(formData.email || "")) {
      setErrorEmail("The email is incorrect!");
      return false;
    } else {
      setErrorEmail("");
    }

    return true;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    verifyData();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (!isChecked && verifyData()) {
      return;
    } else {
      if (isChecked && verifyData()) {
        setEmail(formData.email || "");
        router.push("/signup/verification");
      }
    }
  };

  return (
    <CardForm
      title="Register now 🚀"
      subtitle="Welcome to Skynet! Please enter your details."
    >
      <form onSubmit={handleSubmit} className="relative flex flex-col">
        <div className="flex flex-col gap-5">
          <Label
            text="Username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username || ""}
            name="username"
          />
          <div>
            <Label
              text="Email"
              type="text"
              placeholder="Email"
              value={formData.email || ""} // Utilise l'email dans formData
              onChange={handleChange}
              name="email"
              if_error={!!errorEmail}
            />
            {errorEmail && (
              <span className="text-[15px] text-red-400">{errorEmail}</span>
            )}{" "}
          </div>
        </div>
        <Label type="checkbox" value={isChecked} submit={submitted}>
          <span className="font-sm mb-[-1rem] font-satoshi font-medium leading-5">
            Check here to indicate that you have read and agree to our{" "}
            <LinkUnderline text="Terms of Service" url="#"></LinkUnderline> and{" "}
            <LinkUnderline text="Privacy Policy" url="#"></LinkUnderline>.
          </span>
        </Label>
        <div className="flex flex-col">
          <div className="flex flex-col gap-4">
            <SubmitButton text="Sign up" />
            <GoogleButton />
          </div>
        </div>
        <AnotherOption
          text="You have an account?"
          name_page="Sign in"
          url="/"
        />
      </form>
    </CardForm>
  );
}
