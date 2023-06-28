import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import FeaturedMovieCard from './FeaturedMovieCard';
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

  const featuredMovie = movies.length > 0 ? movies[0] : null;

  return (
    <div className="home">
      {featuredMovie && <FeaturedMovieCard movie={featuredMovie} />}
      <div className="movie-list">
        {movies.slice(1).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
