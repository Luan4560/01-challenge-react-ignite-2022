import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { BoxTasks } from "./components/BoxTasks";
import styles from "./App.module.css";
import "./global.css";

export const App = () => {
  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <Form />
        <BoxTasks />
      </main>
    </>
  );
};
