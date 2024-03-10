
import { useState, useRef, useMemo } from 'react'
import { searchMovies } from '../services/movies' 

export function useMovies({ search, sort }) {
  const [ movies, setMovies ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = async ({search}) => {
    console.log('getMovies');
    if( search === previousSearch.current ) return
    previousSearch.current = search

    try {
      setLoading(true)
      setError(null)
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  // const getSortedMovies = () => {
  //   console.log('render');
  //   const sortedMovies = sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  //   return sortedMovies
  // }

  const sortedMovies = useMemo( () => {
    console.log('memo sorted movies');
    return sort 
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) 
    : movies
  }, [sort, movies] )






  return { movies: sortedMovies, getMovies, loading, error}
}