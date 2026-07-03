import { useParams, Link } from "react-router";


const TaskDetail = ({taskData}) => {
    const {taskId} = useParams(); 
    const task = taskData.find((task) => String(task.id)===taskId)
    if (!task) {return <div>
        <p>task not found</p>
        <Link to={`/`}>back</Link>
        </div>}
        return (<div> 
       <h1>{task.title}</h1> 
       <p>{task.description}</p> 
       <Link to={`/`}>back</Link>
    </div>
    );
} 

export default TaskDetail;