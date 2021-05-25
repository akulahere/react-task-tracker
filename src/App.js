import logo from './logo.svg';
import  { useState } from 'react';

import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([{id: 1, text: 111}, {id: 2, text: 222}]);
  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App;
