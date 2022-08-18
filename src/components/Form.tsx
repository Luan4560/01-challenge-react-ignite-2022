import { Button } from "./Button";
import { Input } from "./Input";

import styles from "./Form.module.css";

export const Form = () => {
  return (
    <form className={styles.form_container}>
      <Input />
      <Button />
    </form>
  );
};
