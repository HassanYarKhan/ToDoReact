import React from 'react'
import { FaSquarePen } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";


function ToDoTask({task, toggleCompleted, deleteTask, editTodo}) { 

    console.log(task.completed);
 
  return (
    <div className='bg-purple-600 rounded-md w-[85%] my-4 px-2 py-2 flex justify-between items-center mx-2 text-lg font-bolder'>
        <div className={task.completed ? 'line-through text-slate-800' :''} onClick={()=>toggleCompleted(task.id)}>
            {task.title}
        </div>
        <div className='flex'> 
        <FaSquarePen className='mx-2  text-lg cursor-pointer hover:text-green-500' onClick={()=>editTodo(task.id)}/>
        <FaTrash className='mx-2 text-lg cursor-pointer hover:text-red-500' onClick={()=>deleteTask(task.id)} />
        </div>
        
    </div>
  )
}

export default ToDoTask