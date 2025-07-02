import { create } from "zustand";

const InitialState = {
  tasks: [
    {
      id: 1,
      message: "hi",
      date: "now",
    },
  ],
};

//object
export const TaskContentStore = create((set) => ({
  ...InitialState,

  createTask: (message) => {
    const newTask = {
      id: Date.now(),
      message,
      date: new Date().toLocaleString(),
    };

    set((state) => ({ tasks: [newTask, ...state.tasks] }));
  },
}));

/*Vite despises the jsx extension together with Zustand */
