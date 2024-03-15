import { Todo } from './Todo'

import { type ListOfTodos, type Todo as TodoType } from '../types'
import { type TodoId } from '../types'


interface Props {
  todos: ListOfTodos
  onRemove: ({id}: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  // onToggleCompleted: (todo: { id: string, completed: boolean }) => void
}


export const Todos: React.FC<Props> = ({ todos, onRemove, onToggleCompleted }) => {
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
            <Todo 
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onRemove={onRemove}
              onToggleCompleted={onToggleCompleted}
              />
          </li>
        ))}
      </ul>
    </div>
  )
}