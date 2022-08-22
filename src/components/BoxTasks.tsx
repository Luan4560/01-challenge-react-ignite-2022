import { Task } from "./Task";

import styles from "./BoxTasks.module.css";
import ClipboardImg from "../assets/clipboard.svg";
import { useState } from "react";

interface TaskData {
  id: string;
  task: string;
  checked?: boolean;
  total_done: number;
}

interface BoxTasksProps {
  tasks: TaskData[];
  onDeleteTask: (task: any) => void;
}

export const BoxTasks = ({ tasks, onDeleteTask }: BoxTasksProps) => {
  const hasTask = tasks.length > 0;
  const [numberOfTaskDone, setNumberOfTaskDone] = useState(0);

  const handleTaskDone = () => {
    setNumberOfTaskDone((prev) => prev + 1);
  };

  return (
    <>
      <section className={styles.task_content}>
        <header>
          <div className={styles.tasks_created}>
            <strong>Tarefas criadas</strong>
            <span className={styles.tasks_tag}>{tasks.length}</span>
          </div>

          <div className={styles.tasks_done}>
            <strong>Concluídas</strong>
            <span className={styles.tasks_tag}>{numberOfTaskDone}</span>
          </div>
        </header>

        {hasTask ? (
          <>
            {tasks.map((task: TaskData) => (
              <Task
                key={task.id}
                tasksTobeDone={task}
                onDeleteTask={onDeleteTask}
                onTaskDone={handleTaskDone}
              />
            ))}
          </>
        ) : (
          <div className={styles.tasks_empty}>
            <img src={ClipboardImg} alt="Clipboard image" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </section>
    </>
  );
};
