
import TodoList from './TodoList.jsx'
import TodoForm from './TodoForm.jsx'
import { useState} from 'react'
import TodolistItem from './TodoListItem.jsx'
function App() {
  const[newTodo, setNewTodo]= useState("Example Text")

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm />
      <p>{newTodo}</p>
      <TodoList />
      <TodolistItem/>

      
    </div>
      
    
    
  )
}

export default App
