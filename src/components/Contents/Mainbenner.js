import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../../Serviece/api';

export default function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        if (query !== '') {
          const movieList = await fetchMovies(query);
          setMovies(movieList);
        } else {
          setMovies([]);
        }
      } catch (error) {
        setError(error);
      }
    };

    const timer = setTimeout(fetchMoviesList, 500);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        setSelectedIndex(prevIndex => Math.max(prevIndex - 1, 0));
      } else if (e.key === 'ArrowDown') {
        setSelectedIndex(prevIndex => Math.min(prevIndex + 1, movies.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [movies]);

  return (
    <div>
      <label>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="영화명을 입력하세요" 
          style={{
            backgroundColor: '#e6e6e6',
            padding: '5px',
            borderRadius: '20px',
            textAlign: 'center'
          }}
        />
      </label>
      <div style={{ display: movies.length ? 'block' : 'none', border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
        {error && <div>Error: {error.message}</div>}
        <ul>
          {movies.map((movie, index) => (
            <li key={index} style={{ backgroundColor: index === selectedIndex ? '#f0f0f0' : 'transparent' }}>
              {movie.movieNm}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}