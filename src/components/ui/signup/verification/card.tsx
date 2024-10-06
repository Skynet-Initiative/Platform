"use client";

import CardForm from "@/components/ui/form/card";
import { useEmailStore } from "@/tools/store"; // Assurez-vous d'importer le store correctement
import ParticleSwarmLoader from "../../animations/email";

export default function VerifcationEmailCard() {
  const { email } = useEmailStore(); // Récupérer l'email du store

  return (
    <CardForm
      title="Verify your email ✉️"
      subtitle={`Account activation link sent to your email address: ${email}. Please follow the link inside to continue.`}
    >
      <ParticleSwarmLoader color="#0074E4" />
      <p className="ml-2 text-[15px] text-white">
        Didn&apos;t get the mail?{" "}
        <a href="#" className="text-blue-300">
          Resend
        </a>
      </p>
    </CardForm>
  );
}
