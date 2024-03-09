import { Square } from './Square'
import { useState } from 'react'

export function WinnerModal({ hasWinner, resetGame }) {
  const [showModal, setShowModal] = useState(true)

  const hiddenModal = () => {
    setShowModal(false)
    setTimeout(() => {
      setShowModal(true)
    }, 2000)
  }

  
  if( hasWinner === null || !showModal ) return null
  
  const winnerText = hasWinner === false ? 'Empate' : 'Ganador'
  return (
    (
      <section className='modal' onClick={hiddenModal} >
        <div className='modal__content' onClick={ ( ev) => ev.stopPropagation() }>
          <h2>{winnerText}</h2>
          <Square isSelected={true} >{hasWinner}</Square>
          <button onClick={resetGame} className='resetGame'>Volver a jugar</button>
        </div>
      </section>
    )
  )
}