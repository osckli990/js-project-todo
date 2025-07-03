import { create } from "zustand";

export const UseUIStore = create((set) => ({
  formVisible: false,
  toggleForm: () => set((state) => ({ formVisible: !state.formVisible })),
  closeForm: () => set({ formVisible: false }),
}));
