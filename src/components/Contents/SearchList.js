import React, { useState, useEffect } from 'react';
import { fetchMovies, fetchInfo } from '../../Serviece/api';
import MovieDetail from './MovieDetail'; 

export default function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedMovieDetails, setSelectedMovieDetails] = useState(null);

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
      } else if (e.key === 'Enter' && selectedIndex >= 0) {
        handleMovieClick(movies[selectedIndex].movieCd);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [movies, selectedIndex]);

  const fetchMovieDetails = async (movieCd) => {
    try {
      const details = await fetchInfo(movieCd);
      setSelectedMovieDetails(details);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  const handleMovieClick = (movieCd) => {
    fetchMovieDetails(movieCd);
  };

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
            textAlign: 'center',
            display: 'block',
            margin: '0 auto'
          }}
        />
          </label>
          <div style={{ 
            display: movies.length ? 'block' : 'none', 
            border: '1px solid #ccc', 
            padding: '10px', 
            position: 'absolute',
            left: '0',
            right: '0',
            transition: 'all 0.5s ease-in-out',
            backgroundColor: '#fff',
            zIndex: 1
          }}>
        {error && <div>Error: {error.message}</div>}
        <ul>
          {movies.map((movie, index) => (
            <li 
              key={index} 
              style={{ 
                backgroundColor: index === selectedIndex ? '#f0f0f0' : 'transparent', 
                cursor: 'pointer', 
                transition: 'background-color 0.3s'
              }} 
              onClick={() => handleMovieClick(movie.movieCd)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              {movie.movieNm}
            </li>
          ))}
        </ul>
      </div>
      {selectedMovieDetails && <MovieDetail details={selectedMovieDetails} />}
    </div>
  );
}