import { create } from "zustand";
import { persist } from "zustand/middleware";

const InitialState = {
  tasks: [
    {
      id: Date.now(),
      message: "I need to do something!",
      date: new Date().toLocaleString(),
    },
  ],
};

//object
export const TaskContentStore = create(
  persist(
    (set) => ({
      ...InitialState,

      createTask: (message) => {
        const newTask = {
          id: Date.now(),
          message,
          date: new Date().toLocaleString(),
        };
        set((state) => ({
          tasks: [...state.tasks, newTask],
        }));
      },

      deleteTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }));
      },
    }),
    {
      name: "task-storage", // localStorage key
    }
  )
);

/*Vite despises the jsx extension together with Zustand */
