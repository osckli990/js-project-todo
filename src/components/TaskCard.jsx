import { TaskContentStore } from "../stores/TaskContentStore";
import { TaskList } from "./TaskList";

export const TaskCard = () => {
  const tasks = TaskContentStore((state) => state.tasks);

  return (
    <>
      <section>
        <h2>Todo</h2>
      </section>
      <section>
        {tasks.length === 0 ? <p>you have nothing to do!</p> : <TaskList />}
      </section>
    </>
  );
};
