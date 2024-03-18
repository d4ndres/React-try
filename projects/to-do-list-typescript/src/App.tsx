import { useState } from 'react'
import { Todos } from './components/Todos'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './App.css'
import { type TodoId, type Todo as TodoType, type FilterValue, type TodoTitle } from './types'
import { TODO_FILTERS } from './consts'

const todoMocks = [
  { id: '1', title: 'Learn React', completed: false },
  { id: '2', title: 'Learn TypeScript', completed: false },
  { id: '3', title: 'Learn GraphQL', completed: false },
]

function App() {
  const [todos, setTodos] = useState(todoMocks)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected( filter )
  }

  const filteredTodos = todos.filter( todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) {
      return !todo.completed
    }
    if (filterSelected === TODO_FILTERS.COMPLETED) {
      return todo.completed
    }
    return todo
  })

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

  const compedCount = todos.filter( todo => todo.completed).length

  const activeCount = todos.filter(todo => !todo.completed).length

  const handleRemoveCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = ({title}: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <>
      <Header onAddTodo={handleAddTodo}/>
      <Todos
      onToggleCompleted={handleCompleted}
      onRemove={handleRemove}
        todos={filteredTodos} />
      <Footer 
        completedCount={compedCount}
        activeCount={activeCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        handleRemoveCompleted={handleRemoveCompleted}
      />
    </>
  )
}

export default App
