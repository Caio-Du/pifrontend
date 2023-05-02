import React, { useState } from 'react';
import MovieCard from './MovieCard';
import './Search.css';


const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=pt-BR&query=${query}&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  };

  return (
    <div className="search-page">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </form>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
