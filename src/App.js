import  { useState } from 'react';

import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, day: 'one', text: 111, reminder: true},
    {id: 2, day: 'two', text: 222, reminder: true}]);
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task));
  }

  return (
    <div className='container'>
      <Header />
      <AddTask onAdd ={addTask} />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : 'No tasks To Show'
      }
    </div>
  )
}

export default App;
