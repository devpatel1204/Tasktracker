//Method 1 
//const tasks=[
//     {
//         id:1,
//         text:'abcd',
//         day: 'Feb 5th at 2:20pm',
//         reminder:true,
//     },
//     {
//         id:2,
//         text:'bcd',
//         day: 'Feb 6th at 2:20pm',
//         reminder:true,
//     },
//     {
//         id:3,
//         text:'cd',
//         day: 'Feb 7th at 2:20pm',
//         reminder:true,
//     },
//     {
//         id:4,
//         text:'d',
//         day: 'Feb 8th at 2:20pm',
//         reminder:true,
//     },
// ]
// const Task=()=>{
//     return(
//         <>  
        
//              {tasks.map((task)=>(<h3 key={task.id}>{task.text}</h3>))} 
//              {/* to remove warning in console we add key */}
//         </>
//     )
// }
//method 2
// import { useState } from "react"
// const Task=()=>{
    
//     const [tasks,setTasks]=useState([
//     {
//         id:1,
//         text:'abcd',
//         day: 'Feb 5th at 2:20pm',
//         reminder:true,
//     },
//     {
//         id:2,
//         text:'bcd',
//         day: 'Feb 6th at 2:20pm',
//         reminder:true,
//     },
//     {
//         id:3,
//         text:'cd',
//         day: 'Feb 7th at 2:20pm',
//         reminder:true,
//     },
//     {
//         id:4,
//         text:'d',
//         day: 'Feb 8th at 2:20pm',
//         reminder:true,
//     },

//     ])

//     return(
//         <>  
         
//         {tasks.map((task)=>(<h3 key={task.id}>{task.text}</h3>))}
            
//         </>
//     )
// }

import {FaTimes} from 'react-icons/fa';
const Task=({task,onDelete,onToggle})=>{
    return(
        <>
       <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={()=>onToggle(task.id)}><h3>{task.text}

       <FaTimes style={{color:'red', cursor:'pointer'}} 
       onClick={()=>onDelete(task.id)}>
       </FaTimes></h3>

       <p>{task.day}</p>
       </div>

        </>
    )
}
export default Task