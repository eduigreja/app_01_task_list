import "./styles.css";
import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

//const task = {
//  id: 0,
// title: "Nova Tarefa",
//  state: "Pendente"
//}

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

  return (
    <div className="App">
      {/* <h1>Hola hermanitos!</h1>   */}
      <Navbar />

      <div className="container">
        <TaskList
          title="Pendente"
          onAddTask={addTask}
          taskState="Pendente"
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        {/*<TaskList title="Fazendo"/>
        <TaskList title="Completa"/> */}

        <TaskList
          title="Fazendo"
          onAddTask={addTask}
          taskState="Fazendo"
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Completa"
          onAddTask={addTask}
          taskState="Completa"
          tasks={tasks.filter((t) => t.state === "Completa")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>

      {/*<ul>
        <li>Aprenderemos React </li>
        <li>Aprenderemos Componentes </li>
      </ul>
      */}
    </div>
  );
}
