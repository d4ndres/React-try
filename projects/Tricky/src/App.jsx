import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { WinnerModal } from './components/WinnerModal.jsx'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board'


function App() {
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [board, setBoard] = useState(() => {

    const boardFromStorage = localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [hasWinner, setHasWinner] = useState(() => {
    const winnerFromStorage = localStorage.getItem('hasWinner')
    return winnerFromStorage
  })

  const resetGame = () => {
    setTurn(TURNS.X)
    setBoard(Array(9).fill(null))
    setHasWinner(null)

    localStorage.removeItem('turn')
    localStorage.removeItem('board')
    localStorage.removeItem('hasWinner')
  }

  const updateBoard = (index) => {
    if (board[index] || hasWinner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setHasWinner((prevState) => {
        confetti()
        return newWinner
      })
    } else if (checkEndGame(newBoard)) {
      setHasWinner(false)
    }

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    localStorage.setItem('turn', newTurn)
    localStorage.setItem('board', JSON.stringify(newBoard))
    localStorage.setItem('hasWinner', newWinner)

  }

  return (
    <main className='board'>
      <h1>Tricky</h1>
      <div className='wrapper-sections'>
        <section className='game'>
          {board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >{board[index]}</Square>
            )
          })}
        </section>
        <div className='indicators'>
          <section className='turn'>
            <Square isSelected={turn === TURNS.X} >{TURNS.X}</Square>
            <Square isSelected={turn === TURNS.O} >{TURNS.O}</Square>
          </section>
          <button onClick={resetGame} className='resetGame'>Volver a jugar</button>
        </div>

      </div>
      {
        <WinnerModal hasWinner={hasWinner} resetGame={resetGame} />
      }

    </main >
  )
}

export default App
