import { create } from "zustand";

// Store pour gérer l'état de la checkbox
interface CheckboxStore {
  isChecked: boolean;
  toggleCheckbox: () => void; // Fonction pour basculer l'état de la case à cocher
}

export const useCheckboxStore = create<CheckboxStore>((set) => ({
  isChecked: false, // État initial
  toggleCheckbox: () => set((state) => ({ isChecked: !state.isChecked })), // Inverse l'état
}));

// Store pour gérer l'email global
interface EmailStore {
  email: string;
  setEmail: (newEmail: string) => void; // Fonction pour mettre à jour l'email
}

export const useEmailStore = create<EmailStore>((set) => ({
  email: "", // Valeur initiale de l'email
  setEmail: (newEmail) => set({ email: newEmail }), // Met à jour l'email dans l'état global
}));
