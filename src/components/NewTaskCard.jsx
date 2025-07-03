import { useState } from "react";
import { TaskContentStore } from "../stores/TaskContentStore";
import { UseUIStore } from "../stores/UseUIStore";
/*falsely flagged as error by vscode */

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
    <form onSubmit={handleSubmit} className="flex gap-4 flex-col md:w-full">
      <textarea
        id="tasks"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => setMessage(e.target.value)}
        /*above is remain of trying to submit on enter key, help would be appreciated */
        placeholder="Your task"
        className="flex  gap-2 w-full p-2 rounded border border-zinc-300 focus:outline-none"
      />
      <button type="submit" className="hover:scale-105">
        Send
      </button>
    </form>
  );
};
