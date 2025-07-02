import { useState } from "react";
import { NewTaskCard } from "./NewTaskCard";
import { NewTaskIcon } from "./NewTaskIcon";

export const TaskFormWrapper = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleForm = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="fixed bottom-4 right-4">
      {/* Button */}
      <NewTaskIcon onClick={toggleForm} />

      {/* Slide-up form */}
      <div
        className={`transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } fixed bottom-16 right-4 bg-white p-4 shadow-xl rounded-xl w-64`}
      >
        <NewTaskCard />
      </div>
    </div>
  );
};
