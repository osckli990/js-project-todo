import { NewTaskIcon } from "./NewTaskIcon";
import { TaskCard } from "./TaskCard";
import { TaskFormWrapper } from "./TaskFormWrapper";

export const MainCard = () => {
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
    <div className="bg-zinc-900 text-white flex flex-col px-[20px] py-[40px]">
      <main className="w-full max-w-md">
        <p className="text-sm text-zinc-400">{formattedDate}</p>
        <h1 className="text-3xl font-bold">{dayName}</h1>
      </main>
      <div className="mt-6">
        <TaskCard />
      </div>
      <TaskFormWrapper />
    </div>
  );
};
