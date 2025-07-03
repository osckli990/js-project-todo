import { TaskContentStore } from "../stores/TaskContentStore";

export const TaskList = () => {
  const tasks = TaskContentStore((state) => state.tasks);
  const deleteTask = TaskContentStore((state) => state.deleteTask);

  return (
    <>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center gap-3 p-3 md:gap-10 bg-zinc-800 rounded-lg shadow"
        >
          {/* Checkbox */}
          <input
            type="checkbox"
            id={`task-${task.id}`}
            className="peer size-[20px]"
          />

          {/* Label acts as a checkbox visually */}
          <label
            htmlFor={`task-${task.id}`}
            className="flex flex-col cursor-pointer text-white peer-checked:line-through peer-checked:text-zinc-500 md:text-xl"
          >
            <span>{task.message}</span>
            <span className="text-xs md:text-md text-zinc-400">
              {task.date}
            </span>
          </label>
          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-400 hover:text-red-300 text-sm md:text-xl"
          >
            ✕
          </button>
        </div>
      ))}
    </>
  );
};
