import { TaskContentStore } from "../stores/TaskContentStore";
import { TaskList } from "./TaskList";

export const TaskCard = () => {
  const tasks = TaskContentStore((state) => state.tasks);

  return (
    <>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Todo</h2>
      </section>
      <section className="max-w-md w-full space-y-2 mt-2">
        {tasks.length === 0 ? (
          <p className="text-zinc-400 italic">you have nothing to do!</p>
        ) : (
          <TaskList />
        )}
      </section>
    </>
  );
};
