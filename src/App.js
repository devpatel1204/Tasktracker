import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Header1 from './components/Header1';
import Appheader from './components/Appheader';
import Tasks from './components/Tasks';
import { useState,useEffect } from "react"
import Addtasks from './components/Addtasks';
import Footer from './components/Footer';
import About from './components/About';
import react from 'react';
import { BrowserRouter, Route , Routes, Link} from "react-router-dom";

  
function App() {
  const [showAddTasks,setShowAddTasks]=useState(false);
  const [tasks,setTasks]=useState([])
    
  useEffect(()=>{
      const getTasks=async()=>{
          const tasksFromserver=await fetchTasks()
          setTasks(tasksFromserver)
      }
      getTasks()
  },[])
   
    //fetch tasks
    const fetchTasks=async()=>{
        const res=await fetch('http://localhost:5000/tasks')
        const data=await res.json()
        console.log(data)
        return data;
    }
//fetch task
    const fetchTask=async(id)=>{
        const res=await fetch(`http://localhost:5000/tasks/${id}`)
        const data=await res.json()
        console.log(data)
        return data;
    }

    //delete task
    // const DeleteTask=(id)=>{
//logicaly delete on load it will display again
    //     console.log('delete',id)
    //     setTasks(tasks.filter((task)=>task.id!==id))
    // }
    const DeleteTask= async (id)=>{
        await fetch(`http://localhost:5000/tasks/${id}`,{
            method:'DELETE',
        })
        console.log('delete',id)
        setTasks(tasks.filter((task)=>task.id!==id))
    }

    //toggle reminder
    const ToggleReminder=async (id)=>{
        const taskToToggle=await fetchTask(id)
        const updTask={...taskToToggle,
        reminder: !taskToToggle.reminder}

        const res=await fetch(`http://localhost:5000/tasks/${id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(updTask)

        })

        const data=await res.json()
        console.log('toggle',id)
        setTasks(tasks.map((task)=>task.id===id?
        {...task,reminder:data.reminder}:task))

    }
    //add tasks
    const addTask=async(task)=>{
        
        const res=await fetch('http://localhost:5000/tasks',{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify(task)
        })
        const data=await res.json()
        setTasks([...tasks,data])
        // console.log(task);
        // const id=Math.floor(Math.random()*10000)+1
        // const newTask={id,...task}
        // setTasks([...tasks,newTask])

    }
  return (
  
    <BrowserRouter>
    
<div className='container'>
<Appheader onAdd={()=>setShowAddTasks(!showAddTasks)} showAdd={showAddTasks} title="Tasktracker"></Appheader>
<Routes>
<Route path='/'  element={
    <>
{showAddTasks&&<Addtasks onAdd={addTask}></Addtasks>}
{tasks.length>0?(
    <Tasks tasks={tasks} onDelete={DeleteTask} 
    onToggle={ToggleReminder}></Tasks>):('No Tasks to show')}
    </>

}>

</Route> 


<Route exact path='/about' element={<About />}></Route>

</Routes>
<Footer></Footer>

</div>

</BrowserRouter>
  );
}

export default App;

