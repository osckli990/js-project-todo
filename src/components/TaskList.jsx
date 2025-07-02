import { TaskContentStore } from "../stores/TaskContentStore";

export const TaskList = () => {
  const tasks = TaskContentStore((state) => state.tasks);

  return (
    <>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg shadow"
        >
          <input type="checkbox" className="accent-blue-500 items-center" />
          <div className="pl-[20px]">
            <p>{task.message}</p>
            <p className="-mt-[10px] text-xs text-zinc-400">{task.date}</p>
          </div>
        </div>
      ))}
    </>
  );
};
