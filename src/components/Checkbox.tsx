import { InputHTMLAttributes, useState } from "react";
import styles from "./Checkbox.module.css";

interface Checkbox extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
}

export const Checkbox = ({ checked, ...props }: Checkbox) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.wrapper}>
      <label>
        <input
          type="checkbox"
          className={isChecked ? styles.checked : ""}
          checked={defaultChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          {...props}
        />
      </label>
    </div>
  );
};
