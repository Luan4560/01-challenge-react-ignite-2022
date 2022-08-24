import { Task } from "./Task";

import styles from "./BoxTasks.module.css";
import ClipboardImg from "../assets/clipboard.svg";

interface TaskData {
  id: string;
  task: string;
  checked?: boolean;
}

interface BoxTasksProps {
  tasks: TaskData[];
  onDeleteTask: (task: any) => void;
  onChecked: (task: string) => void;
}

export const BoxTasks = ({ tasks, onDeleteTask, onChecked }: BoxTasksProps) => {
  const hasTask = tasks.length > 0;

  const numberOfTaskDone = tasks.filter((task) => task.checked === true).length;

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
            <span className={styles.tasks_tag}>
              {numberOfTaskDone} de {tasks.length}
            </span>
          </div>
        </header>

        {hasTask ? (
          <>
            {tasks.map((task: TaskData) => (
              <Task
                key={task.id}
                tasksTobeDone={task}
                onDeleteTask={onDeleteTask}
                onCheckedTask={onChecked}
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
