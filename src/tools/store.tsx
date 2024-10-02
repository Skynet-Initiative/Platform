import { create } from "zustand";

interface CheckboxStore {
  isChecked: boolean;
  toggleCheckbox: () => void;
}

export const useCheckboxStore = create<CheckboxStore>((set) => ({
  isChecked: false,
  toggleCheckbox: () => set((state) => ({ isChecked: !state.isChecked })),
}));
