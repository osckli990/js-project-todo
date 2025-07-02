import { TaskContentStore } from "../stores/TaskContentStore";

export const TaskList = () => {
  const tasks = TaskContentStore((state) => state.tasks);

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <input type="checkbox" />
          <p>{task.message}</p>
          <p>{task.date}</p>
        </div>
      ))}
    </>
  );
};
