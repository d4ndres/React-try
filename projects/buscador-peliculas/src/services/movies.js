
const API_KEY = '53d3f03a'

export const searchMovies = async ({search}) => {
  if( search === '' ) return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const result = await response.json()
    const movies = result.Search
    
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (error) {
    throw new Error('No se pudo obtener la lista de películas')
  }
}