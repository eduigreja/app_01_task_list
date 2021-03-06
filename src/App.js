import "./styles.css";
import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";

import background_sapiens from "./img/sapiens_evol.png";

import Counter from "./components/Counter/Counter";

let idAcc = 0;
const generateID = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    //console.log("Funcao sendo chamada em App");
    const newTask = {
      id: generateID(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    //console.log('update task sendo chamada');
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  const [count, setCount] = useState(0);
  const addFun = () => {
    setCount((count) => {
      return count + 1;
    });
  };

  return (
    <div className="App">
      <Navbar />
      <Header />

      <div className="container">
        <TaskList
          title="Future Tasks"
          onAddTask={addTask}
          taskState="Future Tasks"
          tasks={tasks.filter((t) => t.state === "Future Tasks")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />

        <TaskList
          title="Doing"
          onAddTask={addTask}
          taskState="Doing"
          tasks={tasks.filter((t) => t.state === "Doing")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Complete"
          onAddTask={addTask}
          taskState="Complete"
          tasks={tasks.filter((t) => t.state === "Complete")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>

      <div className="imgs">
        <img src={background_sapiens} alt="bcg" />
      </div>

      <div>
        <Counter />
      </div>

      <div>
        count: {count}
        <button onClick={addFun}>+</button>
      </div>
    </div>
  );
}
