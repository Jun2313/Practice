import axios from 'axios';

const API_BASE_URL = 'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp';
const SERVICE_KEY = '3O0K556P75RX5B3GO8B6';

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        ServiceKey: SERVICE_KEY,
        collection: 'kmdb_new2',
        query,
        detail: 'N',
        listCount: 5,
      }
    });
    console.log(response.data);  // Log the response data to see the structure
    return response.data.items || [];  // Adjust this based on the API response structure
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