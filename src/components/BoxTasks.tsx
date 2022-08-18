import { useState } from "react";
import { Task } from "./Task";

import styles from "./BoxTasks.module.css";
import ClipboardImg from "../assets/clipboard.svg";

export const BoxTasks = () => {
  const [hasTask, setHasTask] = useState(false);

  return (
    <>
      <section className={styles.task_content}>
        <header>
          <div className={styles.tasks_created}>
            <strong>Tarefas criadas</strong>
            <span className={styles.tasks_tag}>0</span>
          </div>

          <div className={styles.tasks_done}>
            <strong>Concluídas</strong>
            <span className={styles.tasks_tag}>0</span>
          </div>
        </header>

        {!hasTask ? (
          <>
            <Task />
            <Task />
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
