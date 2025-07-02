import { TaskContentStore } from "../stores/TaskContentStore";
import { TaskList } from "./TaskList";

export const TaskCard = () => {
  const Tasks = TaskContentStore((state) => state.tasks);

  if (Tasks.length === 0) {
    return (
      <>
        <section>
          <h2>Todo</h2>
        </section>
        <section>
          <p>you have nothing to do!</p>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section>
          <h2>Todo</h2>
        </section>
        <section>
          {Tasks.map((task) => {
            <TaskList key={task.id} {...Tasks} />;
          })}
        </section>
      </>
    );
  }
};
