import styles from "./Header.module.css";
import Logo from "../assets/todo-logo.svg";

export const Header = () => {
  return (
    <header className={styles.container}>
      <img src={Logo} alt="Todo Logo" />
    </header>
  );
};
