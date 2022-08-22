import { Checkbox } from "./Checkbox";
import { Trash } from "phosphor-react";
import { useState } from "react";

import styles from "./Task.module.css";

interface TaskData {
  id: string;
  task: string;
  checked?: boolean;
  total_done: number;
}

interface TaskProps {
  tasksTobeDone: TaskData;
  onDeleteTask: (task: string) => void;
  onTaskDone: () => void;
}

export const Task = ({
  tasksTobeDone,
  onDeleteTask,
  onTaskDone,
}: TaskProps) => {
  const [hasCompletedTask, setHasCompletedTask] = useState(false);

  const handleDeleteTask = () => {
    onDeleteTask(tasksTobeDone?.id);
  };

  const handleCompletedTask = () => {
    setHasCompletedTask(true);
    onTaskDone();
  };

  return (
    <div className={styles.task_container}>
      <div className={styles.task_description}>
        <Checkbox onClick={handleCompletedTask} />
        <p className={hasCompletedTask ? styles.lineThrough : ""}>
          {tasksTobeDone.task}
        </p>
      </div>

      <button onClick={handleDeleteTask}>
        <Trash size={25} />
      </button>
    </div>
  );
};
