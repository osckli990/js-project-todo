import { create } from "zustand";

const InitialState = {
  tasks: ["hi"],
};

//object
export const TaskContentStore = create((set) => ({
  ...InitialState,
}));

/*Vite despises the jsx extension together with Zustand */
