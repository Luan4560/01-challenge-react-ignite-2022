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
}

export const App = () => {
  const [tasks, setTask] = useState<TaskData[]>([]);

  const [newTask, setNewTask] = useState<TaskData>({
    id: "",
    task: "",
    checked: false,
  });

  const handleAddTask = (event: FormEvent) => {
    event.preventDefault();

    setTask([
      ...tasks,
      {
        id: uuidv4(),
        task: newTask.task,
        checked: newTask.checked,
      },
    ]);

    setNewTask({
      id: "",
      task: "",
      checked: false,
    });
  };

  const handleTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    setNewTask({
      id: "",
      task: target.value,
      checked: false,
    });
  };

  const handleTaskChecked = (taskTobeEdit: string) => {
    const newArr = tasks.map((obj) => {
      if (obj.id === taskTobeEdit) {
        return { ...obj, checked: !obj.checked };
      }

      return obj;
    });
    setTask(newArr);
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
        <form onSubmit={handleAddTask}>
          <Input onChange={handleTaskChange} value={newTask.task} />
          <Button disabled={!tasks} />
        </form>

        <BoxTasks
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onChecked={handleTaskChecked}
        />
      </main>
    </>
  );
};
