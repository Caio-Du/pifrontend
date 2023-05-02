import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=pt-BR`;
      const response = await fetch(url);
      const data = await response.json();
      setMovieDetails(data);
    };

    fetchData();
  }, [id]);

  if (!movieDetails) {
    return <div>Carregando...</div>;
  }

  const imageURL = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;

  return (
    <div className="movie-details">
      <img src={imageURL} alt={movieDetails.title} />
      <div className="movie-details-info">
        <h2>{movieDetails.title}</h2>
        <p>Data de lançamento: {movieDetails.release_date}</p>
        <p>Avaliação: {movieDetails.vote_average}/10</p>
        <p>Resumo:</p>
        <p>{movieDetails.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
