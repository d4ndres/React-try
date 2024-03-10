
function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {
        movies.map(movie => (
          <li key={movie.id} className="movie">
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMovies() {
  return <p>No hay películas</p>
}

export function Movies ({ movies }) {
  const hasMovie = movies && movies.length > 0

  return (
    hasMovie ? <ListOfMovies movies={movies} /> : <NoMovies />
  )
}