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
        title: movie.title, // Adjust as per the API response structure
        genre: movie.genre, // Adjust as per the API response structure
        releaseDts: movie.releaseDts, // Adjust as per the API response structure
      }));
    } else {
      console.log(response.data); // Log the response data to understand the structure better
      return [];
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchInfo = async (movieCd) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        ServiceKey: SERVICE_KEY,
        collection: 'kmdb_new2',
        movieId: movieCd,
        detail: 'Y',
      }
    });
    console.log(response.data);  // Log the response data to see the structure
    return response.data.item;  // Adjust this based on the API response structure
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};