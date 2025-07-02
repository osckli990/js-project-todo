import { useState } from "react";
import { TaskContentStore } from "../stores/TaskContentStore";

export const NewTaskCard = () => {
  const [message, setMessage] = useState("");
  const createTask = TaskContentStore((state) => state.createTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your task"
      />
      <button type="submit">Send</button>
    </form>
  );
};
