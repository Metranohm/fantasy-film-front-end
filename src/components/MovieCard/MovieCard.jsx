import { useState, useEffect } from "react"
import Cast from '../Cast/Cast';
import * as movieService from '../../services/movieService'
import { Link } from "react-router-dom";

const MovieCard = ({ movie, handleAddToFav }) => {
  return (  
    <div key={movie.id} className='card' style={{'width':'24rem'}}>
              <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.original_title}/> 
              <div className='card-body'>
                <h5 className='card-title'>{movie.original_title}</h5>
                <p className='card-text'>{movie.overview}</p>
                <p>Cast:</p>
                  <ul>
                    <Cast key={movie.id} movieId={movie.id}/>
                  </ul>
                  <button 
            className='btn btn-primary mt-auto'
            onClick={()=> handleAddToFav(movie)}
          >
            Create DreamCast
          </button>
              </div>
            </div>
  );
}

export default MovieCard;