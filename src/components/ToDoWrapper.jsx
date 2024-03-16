import React, { useState } from 'react'
import Form  from './Form'
import ToDoTask from './ToDoTask';
import  EditTodo from './EditTodo'

function ToDoWrapper() {
    const [todos, setTodos] = useState([]);

    const addHandler = (task)=>{
        setTodos([...todos, {id : crypto.randomUUID(), title: task, completed: false, isEditing: false}])
    }
    function toggleCompleted(id){
        setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }
    function deleteTask(id){
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    function editTodo(id){
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: ! todo.isEditing} : todo)) 
    }
    function editTask(title, id){
        setTodos(todos.map(todo => todo.id === id ? {...todo, title, isEditing: !todo.isEditing}: todo ))
    }
    
  return (
    <div className='bg-blue-950 px-8 py-8 rounded-md flex flex-col  items-center' >
        <h1 className='text-center mb-8 text-[2rem] font-extrabold drop-shadow-md' >GET THINGS DONE!!</h1>
        <Form addNewTodo={addHandler}/>
        {
    todos.map(todo => todo.isEditing ? (
        <EditTodo editTodo={editTask} todo={todo}/>
    ) : ( <ToDoTask task={todo} key={todo.id} toggleCompleted={toggleCompleted} deleteTask={deleteTask} editTodo={editTodo}/>))
}

    </div>
  )
}

export default ToDoWrapper