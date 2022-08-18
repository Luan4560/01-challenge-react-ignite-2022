import { PlusCircle } from "phosphor-react";
import styles from "./Button.module.css";

export const Button = () => {
  return (
    <button className={styles.btn_container} type="submit">
      Criar
      <PlusCircle size={16} />
    </button>
  );
};
