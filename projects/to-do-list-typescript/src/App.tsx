import { useState } from 'react'
import { Todos } from './components/Todos'
import './App.css'
import { type TodoId, type Todo as TodoType } from './types'

const todoMocks = [
  { id: '1', title: 'Learn React', completed: false },
  { id: '2', title: 'Learn TypeScript', completed: false },
  { id: '3', title: 'Learn GraphQL', completed: false },
]

function App() {
  const [todos, setTodos] = useState(todoMocks)

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>)
    : void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <>
      <Todos
      onToggleCompleted={handleCompleted}
      onRemove={handleRemove}
        todos={todos} />
    </>
  )
}

export default App
