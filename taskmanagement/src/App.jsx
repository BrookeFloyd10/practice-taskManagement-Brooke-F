
import { Route, Routes } from 'react-router'
import './App.css'
const tasks =[{id:1,
   title: "task1",
   description:"this is task 1"},
  {id:2,
    title:"task2",
  description:"this is task 2"},
 {id:3,
    title: "task3",
  description:"this is task 3"}]

function App() {
 

  return (
    <Routes> 
      <Route path= "/" element= {<TaskList taskData={tasks}/>}/>
      <Route path="/task/:taskId" element={<TaskDetail taskData={tasks} />} />
    </Routes>
  )
}

export default App;