import React, { useState, useEffect } from 'react';
import { fetchMovies, fetchInfo } from '../../Serviece/api';
import MovieDetail from './MovieDetail'; 

export default function Search() {
  // 여러 상태 변수들을 선언합니다.
  const [query, setQuery] = useState('');  // 검색 쿼리를 저장하는 상태 변수
  const [movies, setMovies] = useState([]);  // 영화 목록을 저장하는 상태 변수
  const [error, setError] = useState(null);  // 에러를 저장하는 상태 변수
  const [selectedIndex, setSelectedIndex] = useState(-1);  // 선택된 인덱스를 저장하는 상태 변수
  const [selectedMovieDetails, setSelectedMovieDetails] = useState(null);  // 선택된 영화의 상세 정보를 저장하는 상태 변수
  const [showModal, setShowModal] = useState(false);  // 모달 창의 표시 여부를 저장하는 상태 변수

  // 검색 쿼리가 변경될 때마다 영화 목록을 가져오는 효과를 정의.
  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        if (query !== '') {
          const movieList = await fetchMovies(query);  // 검색 쿼리로 영화 목록을 가져옴.
          setMovies(movieList);  // 가져온 영화 목록을 상태 변수에 저장.
        } else {
          setMovies([]);  // 검색 쿼리가 비어 있으면 영화 목록을 비움.
        }
      } catch (error) {
        setError(error);  // 에러가 발생하면 에러 상태 변수를 설정.
      }
    };
    const timer = setTimeout(fetchMoviesList, 500);  // 500ms 후에 fetchMoviesList 함수를 호출.
    return () => clearTimeout(timer);  // 컴포넌트가 언마운트 될 때 타이머를 취소.
  }, [query]);

  // 키보드 이벤트를 처리하는 효과를 정의.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        setSelectedIndex(prevIndex => Math.max(prevIndex - 1, 0));  // 위쪽 화살표 키를 처리.
      } else if (e.key === 'ArrowDown') {
        setSelectedIndex(prevIndex => Math.min(prevIndex + 1, movies?.length - 1));  // 아래쪽 화살표 키를 처리.
      } else if (e.key === 'Enter' && selectedIndex >= 0) {
        handleMovieClick(movies[selectedIndex].movieCd);  // 엔터 키를 처리.
      }
    };
    window.addEventListener('keydown', handleKeyDown);  // 키보드 이벤트 리스너를 추가.
    return () => {
      window.removeEventListener('keydown', handleKeyDown);  // 컴포넌트가 언마운트 될 때 이벤트 리스너를 제거.
    };
  }, [movies, selectedIndex]);

  const fetchMovieDetails = async (movieId, movieSeq) => {
    try {
      const details = await fetchInfo(movieId, movieSeq);
      console.log("Fetched Details:", details);  // Debug line
      setSelectedMovieDetails(details);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };
  
  const handleMovieClick = (movie) => {
    console.log("List Item Clicked, Movie:", movie);  // Debug line
    fetchMovieDetails(movie.movieId, movie.movieSeq);
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
          autoFocus
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
            onClick={() => handleMovieClick(movie)}
          >
            <div style={{
              width: '400px',
              height: '150px',
              backgroundColor: '#fff',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <h6>제목: {movie.title}</h6>
              <div>장르: {movie.genre}</div>
              <div>제작국가: {movie.nation}</div>
              <div>유형: {movie.type}</div>
            </div>
          </li>
        ))}
        </ul>
      </div>
      {selectedMovieDetails && <MovieDetail details={selectedMovieDetails} showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}