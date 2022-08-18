import styles from "./Task.module.css";
import { Checkbox } from "./Checkbox";

export const Task = () => {
  return (
    <div className={styles.task_container}>
      <Checkbox />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
    </div>
  );
};
