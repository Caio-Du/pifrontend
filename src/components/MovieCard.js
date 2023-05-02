import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const imageURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={imageURL} alt={movie.title} />
        <h3>{movie.title}</h3>
      </Link>
    </div>
  );
};

export default MovieCard;
