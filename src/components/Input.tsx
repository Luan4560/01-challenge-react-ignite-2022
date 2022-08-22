import styles from "./Input.module.css";

export const Input = ({ ...props }) => {
  return (
    <input
      className={styles.input_todo}
      type="text"
      placeholder="Adicione uma nova tarefa"
      required
      {...props}
    />
  );
};
