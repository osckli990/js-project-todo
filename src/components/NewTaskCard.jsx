import { useState } from "react";
import { TaskContentStore } from "../stores/TaskContentStore";
import { UseUIStore } from "../stores/UseUIStore";

export const NewTaskCard = () => {
  const [message, setMessage] = useState("");
  const createTask = TaskContentStore((state) => state.createTask);
  const closeForm = UseUIStore((state) => state.closeForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return; // prevent empty tasks
    createTask(message);
    setMessage("");
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="tasks"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => setMessage(e.target.value)}
        /*above is remain of trying to submit on enter key, help would be appreciated */
        placeholder="Your task"
        className="w-full p-2 rounded border border-zinc-300 focus:outline-none"
      />
      <button type="submit">Send</button>
    </form>
  );
};
