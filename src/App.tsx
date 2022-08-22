import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Header } from "./components/Header";
import { BoxTasks } from "./components/BoxTasks";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

import styles from "./App.module.css";
import "./global.css";

interface TaskData {
  id: string;
  task: string;
  checked?: boolean;
  total_done: number;
}

export const App = () => {
  const [tasks, setTask] = useState<TaskData[]>([]);

  const [newTask, setNewTask] = useState<TaskData>({
    id: "",
    task: "",
    checked: false,
    total_done: 0,
  });

  const handleAddTask = (event: FormEvent) => {
    event.preventDefault();

    setTask([
      ...tasks,
      {
        id: uuidv4(),
        task: newTask.task,
        checked: newTask.checked,
        total_done: newTask.total_done,
      },
    ]);
  };

  const handleTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    setNewTask({
      id: "",
      task: target.value,
      checked: false,
      total_done: 0,
    });
  };

  const handleDeleteTask = (taskTobeDeleted: string) => {
    const taskShouldbeDeleted = tasks.filter((task) => {
      return task.id !== taskTobeDeleted;
    });
    setTask(taskShouldbeDeleted);
  };

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <form>
          <Input onChange={handleTaskChange} />
          <Button disabled={!tasks} onClick={handleAddTask} />
        </form>
        <BoxTasks tasks={tasks} onDeleteTask={handleDeleteTask} />
      </main>
    </>
  );
};
