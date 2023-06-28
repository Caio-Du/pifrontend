import React from 'react';
import './FeaturedMovieCard.css';

const FeaturedMovieCard = ({ movie }) => {
  const imageURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="featured-movie-card">
      <div className="featured-movie-image">
        <img src={imageURL} alt={movie.title} />
      </div>
      <div className="featured-movie-details">
        <h2>{movie.title}</h2>
        <p>Data de lançamento: {movie.release_date}</p>
        <p>Avaliação: {movie.vote_average}/10</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default FeaturedMovieCard;
