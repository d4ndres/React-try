import { FILTER_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  filterSelected: FilterValue
  onFilterSelected: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = (
  { filterSelected, onFilterSelected }
) => {



  return (
    <ul>
      {
      Object.entries(FILTER_BUTTONS).map(([key, { literal, href }]) => {
        const isSelected = filterSelected === key
        const className = isSelected ? 'selected' : ''


        return (
          <li key={key} >
            <a href={href} className={className} onClick={
              (ev) => {
                ev.preventDefault()
                onFilterSelected(key as FilterValue)
              }
            }>{literal}</a>
          </li>
        )
      })
      }
    </ul>
  )
}