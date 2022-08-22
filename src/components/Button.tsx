import { PlusCircle } from "phosphor-react";
import styles from "./Button.module.css";

export const Button = ({ ...props }) => {
  return (
    <button className={styles.btn_container} type="submit" {...props}>
      Criar
      <PlusCircle size={16} />
    </button>
  );
};
