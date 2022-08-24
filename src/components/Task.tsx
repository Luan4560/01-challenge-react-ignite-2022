import { Checkbox } from "./Checkbox";
import { Trash } from "phosphor-react";
import { useState } from "react";

import styles from "./Task.module.css";

interface TaskData {
  id: string;
  task: string;
  checked?: boolean;
}

interface TaskProps {
  tasksTobeDone: TaskData;
  onDeleteTask: (task: string) => void;
  onCheckedTask: (task: string) => void;
}

export const Task = ({
  tasksTobeDone,
  onDeleteTask,
  onCheckedTask,
}: TaskProps) => {
  const [hasCompletedTask, setHasCompletedTask] = useState(false);

  const handleDeleteTask = () => {
    onDeleteTask(tasksTobeDone?.id);
  };

  const handleChangeCheck = () => {
    setHasCompletedTask(!hasCompletedTask);
    onCheckedTask(tasksTobeDone?.id);
  };

  return (
    <div className={styles.task_container}>
      <div className={styles.task_description}>
        <Checkbox onClick={handleChangeCheck} />
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
