import { NewTaskIcon } from "./NewTaskIcon";
import { TaskCard } from "./TaskCard";
import { TaskFormWrapper } from "./TaskFormWrapper";
import { TaskContentStore } from "../stores/TaskContentStore";

export const MainCard = () => {
  const tasks = TaskContentStore((state) => state.tasks);
  const taskCount = tasks.length;

  const today = new Date();

  // Format: July 2, 2025
  const formattedDate = today.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Format: Wednesday
  const dayName = today.toLocaleDateString(undefined, { weekday: "long" });

  return (
    <main className="bg-zinc-900 text-white flex flex-col px-[20px] py-[40px] w-full">
      <section className="w-full">
        <p className="text-sm text-zinc-400">{formattedDate}</p>
        <h1 className="text-3xl font-bold">{dayName}</h1>
        <p className="text-sm text-zinc-400">Amount of tasks: {taskCount}</p>
      </section>
      <div className="mt-6 w-full">
        <TaskCard />
      </div>
      <TaskFormWrapper />
    </main>
  );
};
