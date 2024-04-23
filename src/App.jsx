import { useState, useEffect } from 'react'
import TodoList from '../components/TodoList'
import TodoInput from '../components/TodoInput'
// import BasicButtons from '../components/Button'

import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [newValue, setNewValue] = useState('')

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: 
    newList }))

  }

function handleAddTodo(newTodo){
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
}

function handleDeleteTodo(index){
  const newTodoList = todos.filter((item, itemIndex) => {
    return itemIndex !== index
  })
  persistData(newTodoList)
  setTodos(newTodoList)
}

function handleEditTodo(index){
  const editTodo = todos[index]
  setNewValue(editTodo)
  handleDeleteTodo(index)
}

useEffect(() => {

  if (!localStorage){
    return 
  }

  let localTodos = localStorage.getItem('todos')
  if (!localTodos){
    return
  }

  localTodos = JSON.parse(localTodos).todos
  setTodos(localTodos)

},[])
  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} newValue={newValue} setNewValue={setNewValue} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
    </>
  )
}

export default App
