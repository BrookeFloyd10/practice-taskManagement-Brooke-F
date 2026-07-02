import { Link } from "react-router";
const TaskList = ({taskData}) => {
return (<div className = "taskList" >
    <h1>TaskList</h1> 
    <ul>
       {taskData.map((task )=>(
       <li key= {task.id} >
        <Link to={`/task/${task.id}`}>{task.title}</Link>

       </li> 
       )) } 
         </ul>
     
    </div>)
};
export default TaskList; 