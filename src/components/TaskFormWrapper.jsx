import { useEffect } from "react";
import { NewTaskCard } from "./NewTaskCard";
import { NewTaskIcon } from "./NewTaskIcon";
import { UseUIStore } from "../stores/UseUIStore";

export const TaskFormWrapper = () => {
  const formVisible = UseUIStore((state) => state.formVisible);
  const toggleForm = UseUIStore((state) => state.toggleForm);
  const closeForm = UseUIStore((state) => state.closeForm);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeForm();
      }
    };

    if (formVisible) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [formVisible, closeForm]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <NewTaskIcon onClick={toggleForm} />

      {/* Form Wrapper */}
      <div
        className={`transform transition-all duration-300 ease-in-out
          fixed bottom-[40px] right-4 w-64 rounded-xl shadow-xl 
          bg-zinc-700 p-4
          ${
            formVisible
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "translate-y-10 opacity-0 pointer-events-none"
          }`}
      >
        <NewTaskCard />
      </div>
    </div>
  );
};
