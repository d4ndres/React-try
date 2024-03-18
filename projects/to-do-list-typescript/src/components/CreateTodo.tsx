import {type TodoTitle} from '../types'
import { useState } from 'react'
interface Props {
  saveTodo: ({ title }: TodoTitle ) => void
}

export const CreateTodo: React.FC<Props> = ({saveTodo}) => {
  const [inputValue, setInputValue] = useState('')

    // const handlekeyDown = ( event: React.KeyboardEvent<HTMLInputElement>) : void => 
    // {

    // }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
      onChange={(ev) => setInputValue(ev.target.value)}
      value={inputValue}
      autoFocus
      type="text" placeholder='¿Qué quieres hacer?'/>
    </form>
  )
}