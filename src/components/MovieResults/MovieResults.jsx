import { Link } from 'react-router-dom';
import Cast from '../Cast/Cast';
import styles from './MovieResults.module.css'
import MovieCard from "../../components/MovieCard/MovieCard";
import * as movieService from '../../services/movieService'

const MovieResults = ({movies, profile, setProfile}) => {
  
  const handleAddToFav = async movie => {
    try {
      const setFavMovie={
        name: `${movie.original_title}`,
        photo: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        tmdbID: `${movie.id}`
      }
      const newMovie = await movieService.create(setFavMovie)
      setProfile({
        ...profile,
        favoriteMovies:[...profile.favoriteMovies,newMovie]
      })
    } catch (err) {
      console.log(err)
    }
  }

  return ( 
    <main className={styles.container}>
      { movies.length ? 
        movies.map( movie => {
          if (movie.backdrop_path)
          return (
            <>
              <MovieCard 
              movie={movie} 
              key={movie._id}
              handleAddToFav={handleAddToFav}/> 
            </>
          )
        })
        :
        <p>Search for Movies to get started</p>
      }
    </main>
  );
}

export default MovieResults