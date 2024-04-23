import React, {useState} from 'react'
import TodoCard from './TodoCard'
export default function TodoList(props) {

    const {todos, setTodos} = props

  return (
    <ul className='main'>
        {
          todos.map((todo, todoIndex) => {
            return (
              <TodoCard {...props} index={todoIndex} key={todoIndex}>
                <p>{todo}</p>
              </TodoCard>
            )
          })
        }
    </ul>
  )
}
