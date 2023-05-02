import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './Home.css';


const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=pt-BR&page=1`;
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    };

    fetchData();
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
