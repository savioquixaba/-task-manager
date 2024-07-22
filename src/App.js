import React, { useState } from "react";
import TaskList from "./components/TaskList";
import AddTaskForm from './components/AddTaskForm';
import './App.css';


function App(){
  const [tasks, setTasks] = useState([
    {text: 'Aprender React', completed: false},
    {text: 'construir um projeto', completed: true}

]);

const addTask = (taskText) => {
  setTasks([...tasks, { text: taskText, completed: false }]);
};

  return (
    <div className="App"> 
      <h1>Teste do components task</h1>
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;