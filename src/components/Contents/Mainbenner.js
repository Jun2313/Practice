import React, { useState } from 'react';
import axios from 'axios';

export default function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json', {
        params: {
          key: '67328ac7080895999b0f2d26ff8b6267',
          movieNm: query,
          curPage: '1',
          itemPerPage: '5',
        },
      });
      setMovies(response.data.movieListResult.movieList);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <label>
        <div>검색창입니다.</div>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="영화명을 입력하세요" />
        <button onClick={handleSearch} >검색</button>
      </label>
      <div>
        {error && <div>Error: {error.message}</div>}
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              <strong>Movie Name:</strong> {movie.movieNm} <br />
              <strong>Release Date:</strong> {movie.openDt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}