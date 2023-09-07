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