import React, { useState } from 'react'

function Form({addNewTodo}) {
  const [inputTask, setInputTask] = useState('');
  
  
  
  function geUserInput(e){
    setInputTask(e.target.value)
    
  }

  function handleSubmit(e){
    e.preventDefault();
    addNewTodo(inputTask)
    setInputTask('')
    

  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={inputTask}
             onChange={geUserInput} 
            className='todoInput bg-blue-950 border-2 border-purple-600 rounded-l-md p-1 focus:border-none focus:ring-none'
             placeholder='What is the task today' />
            <button type='submit' className='bg-purple-600 border-2 border-purple-600 rounded-r-md p-1 '>Add Task</button>
        </form>
  </div>
  )
}

export default Form