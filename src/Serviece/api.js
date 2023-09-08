import axios from 'axios';

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json', {
      params: {
        key: '67328ac7080895999b0f2d26ff8b6267',
        movieNm: query,
        curPage: '1',
        itemPerPage: '5',
        genreAlt: ""
      },
    });
    return response.data.movieListResult.movieList;
  } catch (error) {
    throw error;
  }
};

export const fetchInfo = async (movieCd) => {
  try {
    const response = await axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json', {
      params: {
        key: '67328ac7080895999b0f2d26ff8b6267',
        movieCd: movieCd,
      },
    });
    return {
      movieNm: response.data.movieInfoResult.movieInfo.movieNm,
      openDt: response.data.movieInfoResult.movieInfo.openDt,
      genres: response.data.movieInfoResult.movieInfo.genres.map(genre => genre.genreNm).join(', '),
      genreNm: response.data.movieInfoResult.movieInfo.genres.map(genre => genre.genreNm).join(', '),
      actors: response.data.movieInfoResult.movieInfo.actors.map(actor => actor.peopleNm).join(', '),
    };
  } catch (error) {
    throw error;
  }
};