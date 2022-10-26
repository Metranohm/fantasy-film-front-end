import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import MovieCard from "../../components/MovieCard/MovieCard"
import Cast from "../../components/Cast/Cast"

// Services
import * as movieService from "../../services/movieService"

const MovieDetails = (props) => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const fetchMovie = async () => {
      const moviedata = await movieService.show(id)
      setMovie(moviedata)
    }
    fetchMovie()
  }, [id])

  return (
    <main>
      <h1>Movies</h1>
      {/* <MovieCard /> */}
      <Cast />
    </main>
  )
}

export default MovieDetails