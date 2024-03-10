import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useRef, useState, useEffect, useCallback } from 'react'
import debounce from 'just-debounce-it'




function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.startsWith(' ')) {
      setError('No se puede buscar una película con espacios al inicio')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con números')
      return
    }

  }, [search])

  return { search, setSearch, error }
}


function App() {
  const [ sort, setSort ] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })


  const debouncedMovies = useCallback( debounce( search => {
    console.log('debounced');
    getMovies(search)
  }, 500 )
  , [] )


  const handleSubmit = (ev) => {
    ev.preventDefault()
    // const fields = Object.fromEntries( new FormData(ev.target))
    // objeto

    getMovies({ search })
  }

  const handleChange = (ev) => {
    const newSearch = ev.target.value
    setSearch(newSearch)
    debouncedMovies({ search: newSearch })
  }


  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit} >
          <div className='wrapper-input'>
            <input onChange={handleChange} value={search} name="query" type="text" placeholder='Batman, Avengers' />
            {error && <small>{error}</small>}
          </div>
          <div>
            <input type="checkbox" id="sort" name="sort" value={sort} onChange={ev => setSort(ev.target.checked)} />
            <label htmlFor="sort">Ordenar resultados</label>
          </div>

          <button type='submit'>
            {loading ? 'Buscando...': 'Buscar'}

          </button>
        </form>

      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
