import { type Todo as TodoType } from '../types'
import { type TodoId } from '../types'

interface Props extends TodoType {
  onRemove: ({id}: TodoId) => void
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}


export const Todo: React.FC<Props> = ({ id, title, completed, onRemove, onToggleCompleted }) => {
  return (
    <div className="view">
      <input type="checkbox" className="toggle" checked={completed} onChange={(ev) => onToggleCompleted({id, completed: ev.target.checked})}/>
      <label>{id} - {title}</label>
      <button onClick={() => onRemove({id})}>Eliminar</button>
    </div>
  )
}