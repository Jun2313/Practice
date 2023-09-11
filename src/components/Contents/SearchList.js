import React, { useState, useEffect } from 'react';
import { fetchMovies, fetchInfo } from '../../Serviece/api';
import MovieDetail from './MovieDetail'; 

export default function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedMovieDetails, setSelectedMovieDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
        setSelectedIndex(prevIndex => Math.min(prevIndex + 1, movies?.length - 1));  // Add null check here
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
    setShowModal(true);
  };

  // 리스트항목을 클릭하거나 엔터를 눌러서 선택을 했을시
  // 리스트항목이 안보이도록하기.

  return (
    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
      <label>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="영화 제목을 입력하세요."
          style={{
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid #fff',
            background: 'transparent',
            width: '15rem',
            paddingLeft: '0.5rem',
            paddingBottom: '0.3rem',
            fontSize: '1rem',
            color: '#fff',
            margin: '10px 20px'
          }}
        />
      </label>
      <div style={{ 
        padding: '10px', 
        position: 'absolute',
        left: '50%',
        top: '50px',
        transform: 'translateX(-50%)',
        transition: 'all 0.5s ease-in-out',
        zIndex: 1,
        display: movies?.length ? 'block' : 'none'
      }}>
        {error && <div>Error: {error.message}</div>}
        <ul style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          padding: '5%',
          listStyleType: 'none'
        }}>
        {movies?.map((movie, index) => (
          <li 
            key={index} 
            style={{ 
              backgroundColor: index === selectedIndex ? '#f0f0f0' : 'transparent', 
              cursor: 'pointer', 
              margin: '10px 0'
            }} 
            onClick={() => handleMovieClick(movie.movieCd)}
          >
            <div style={{
              width: '400px',
              height: '150px',
              backgroundColor: '#fff',
              borderRadius: '100px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div>{movie.movieNm}</div>
              <div>{movie.genre}</div>
              <div>{movie.actor}</div>
              <div>{movie.releaseDate}</div>
            </div>
          </li>
        ))}
        </ul>
      </div>
      {selectedMovieDetails && <MovieDetail details={selectedMovieDetails} showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}