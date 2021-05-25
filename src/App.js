import  { useState } from 'react';

import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, day: 'one', text: 111, reminder: true},
    {id: 2, day: 'two', text: 222, reminder: true}]);
  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task));
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : 'No tasks To Show'
      }
    </div>
  )
}

export default App;
