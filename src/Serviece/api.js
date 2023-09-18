import axios from 'axios';

// KmDB (초기 영화 정보 데이터베이스)
// 기본 API URL과 서비스 키를 설정
const API_BASE_URL = 'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp';
const SERVICE_KEY = '3O0K556P75RX5B3GO8B6';

// TMDB (이미지 추가 및 최신 영화 정보 데이터베이스)
// API 인증 헤더를 설정합니다. 여기에는 토큰이 포함되어 있음
const API_AUTH_HEADER = {
  headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDY1NmM5N2U4N2QyZWVmYTlhMzVmYzk0MTAzNzAzNCIsInN1YiI6IjY0ZmFiZTg5ZGMxY2I0MDEzZDBlMzQ1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OUxPq3OA-n1Y29v0mm8DXMALusTaVCAOFn9QW6kiqZg'
  }
};

// 영화를 검색하여 결과를 반환하는 비동기 함수
// 쿼리 파라미터로 영화의 제목이나 키워드를 입력 받음
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

    // API 응답에서 필요한 데이터만 추출하여 반환
    if (response.data && response.data.Data && response.data.Data[0].Result) {
      return response.data.Data[0].Result.map(movie => ({
        title: movie.title, //영화명
        type: movie.type, // 유형
        genre: movie.genre, // 장르
        nation: movie.nation,  // 국가
        movieId: movie.movieId, 
        movieSeq: movie.movieSeq,
        plots: movie.plots,  //포스터이미지
        repRlsDate: movie.repRlsDate //개봉일
      }));
    } else {
      console.log(response.data); 
      return [];
    }
  } catch (error) {
    console.error('영화 데이터를 가져오는 중 오류 발생:', error);
    throw error;
  }
};

// 특정 영화의 상세 정보를 가져오는 비동기 함수
// 영화 ID와 영화 시퀀스 번호를 인자로 받음
export const fetchInfo = async (movieId, movieSeq) => { 
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        ServiceKey: SERVICE_KEY,
        collection: 'kmdb_new2',
        movieId,
        movieSeq,
        detail: 'Y'
      }
    });
    
    console.log("API Response: ", response);

    if (response.data && response.data.Data && response.data.Data[0].Result) {
      return response.data.Data[0].Result[0]; 
    } else {
      console.error("Error fetching movie details: unexpected response structure");
      return undefined;
    }

  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

// 최신 인기 영화 목록을 가져오는 비동기 함수
// TMDB API를 사용하여 한국어로 된 인기 영화 목록을 가져옴
export const fetchPopularMovies = async () => {
  try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', API_AUTH_HEADER);
      console.log('최신영화 데이터 가져오기 성공! :', response.data.results);
      return response.data.results;
  } catch (err) {
      console.error(err);
      return null;
  }
};
