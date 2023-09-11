import axios from 'axios';

const API_BASE_URL = 'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp';
const SERVICE_KEY = '3O0K556P75RX5B3GO8B6'; // Your actual service key

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        ServiceKey: SERVICE_KEY,
        collection: 'kmdb_new2',
        query,
        detail: 'Y',
        listCount: 5
      }
    });

    if (response.data && response.data.Data && response.data.Data[0].Result) {
      return response.data.Data[0].Result.map(movie => ({
        title: movie.title,  // adjust based on the actual property name
        type: movie.type,  // adjust based on the actual property name
        genre: movie.genre,  // adjust based on the actual property name
        nation: movie.nation,  // adjust based on the actual property name
        movieId: movie.movieId,  // add this to get the correct movie identifier
        movieSeq: movie.movieSeq  // add this to get the correct movie sequence
      }));
    } else {
      console.log(response.data); 
      return [];
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchInfo = async (movieId, movieSeq) => {  // modify parameters to include movieSeq
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        ServiceKey: SERVICE_KEY,
        collection: 'kmdb_new2',
        movieId,
        movieSeq,
        detail: 'Y',
      }
    });
    const resultArray = response.data.Data[0].Result;

    return {
      title: resultArray[0].title,
      releaseDate: resultArray[0].releaseDate,
      posterUrls: resultArray[0].posters ? resultArray[0].posters.split('|') : [],
      stillUrls: resultArray[0].stlls ? resultArray[0].stlls.split('|') : [],
    };
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};