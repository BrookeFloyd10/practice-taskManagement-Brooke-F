
import { Route, Routes } from 'react-router'
import './App.css'
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';

const tasks =[{id:1,
   title: "Task 1",
   description:"This is task 1"},
  {id:2,
    title:"Task 2",
  description:"This is task 2"},
 {id:3,
    title: "Task 3",
  description:"This is Task 3"}];

function App() {
  return (
   
    <Routes> 
      <Route path="/" element={<TaskList taskData={tasks}/>}/>
      <Route path="/task/:taskId" element={<TaskDetail taskData={tasks} />} />
    </Routes>

  );
}

export default App;