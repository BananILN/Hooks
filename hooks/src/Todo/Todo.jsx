import {  useState } from "react"
import { getRandom } from "../Counter/Counter";

export default function Todo(){
    const [task, setTask] = useState([]);
 
    const addTask = () =>{
        setTask(prevTask =>[
            ...prevTask,
            {
                id: getRandom(),
                title: "New Task",
                completed: false,
            }
        ])
    }

    return (
        <div>
            <button onClick={addTask}>add task</button>
            <ul>
                {task.map(task =>(
                    <li key={task.id} > ${task.title} ${task.id}</li>
                ))}
            </ul>
        </div>
    )
}