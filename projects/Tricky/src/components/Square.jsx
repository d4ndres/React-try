export const Square = ({ children, updateBoard = () => {}, index, isSelected }) => {
  const className = isSelected ? 'square selected' : 'square'

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}