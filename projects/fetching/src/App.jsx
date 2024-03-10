
import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { Kitty } from './components/Kitty'


export function App() {
  const { fact, refreshFact } = useCatFact()

  return (
    <main>
      <div>
        <h1>CriptoKitties</h1>
        <button onClick={refreshFact}>Get a new fact</button>
      </div>
      {fact && <p>{fact}</p>}
      <section className='memeCats'>
        <Kitty fact={fact} />
      </section>
    </main>
  )
}