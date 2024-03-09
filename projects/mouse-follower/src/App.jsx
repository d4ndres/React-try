import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('mounted');
  }, [])

  useEffect(() => {
    console.log('update');
  })

  useEffect(() => {
  
    return () => {
      console.log('beforeDestroy');
      console.log('update dependency');
    }
  }, [])

  useEffect(() => {

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [enabled])

  return (
    <main>
      <div className='ball' style={{
          position: 'absolute',
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
          backgroundColor: '#646cff',
          top: '-1rem',
          left: '-1rem',
          transform: `translate(${position.x}px, ${position.y}px)`
      }}></div>

      <h2>Follower</h2>
      <button onClick={ () => setEnabled(!enabled) }>
        { enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main >
  )
}

export default App
