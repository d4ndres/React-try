
import { FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number,
  completedCount: number,
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
  handleRemoveCompleted: () => void
}


export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  handleRemoveCompleted
}) => {

  return(
    <footer>
      <span>
        <strong>{activeCount}</strong>
        Tareas pendientes
      </span>
      <Filters 
        filterSelected={filterSelected}
        onFilterSelected={handleFilterChange}
      />
      {
        completedCount > 0 && (
          <button onClick={handleRemoveCompleted}>Borrar completado</button>
        )
      }
    </footer>
  )
}