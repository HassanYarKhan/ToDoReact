import React, { useState } from 'react'

function EditTodo({editTodo, todo}) {
  const [inputTask, setInputTask] = useState(todo.title);
  
  
  
  function geUserInput(e){
    setInputTask(e.target.value)
    
  }
  function handleSubmit(e){
    e.preventDefault();
    editTodo(inputTask, todo.id);
    console.log('update submit');
}

 
  return (
    <div className='my=2'>
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={inputTask}
             onChange={geUserInput} 
                className='todoInput bg-blue-950 border-2 border-purple-600 rounded-l-md focus:border-none focus:ring-none'
             placeholder='Update Task' />
            <button type='submit' className='bg-purple-600 border-2 border-purple-600 rounded-r-md  '>Update Task</button>
        </form>
  </div>
  )
}

export default EditTodo