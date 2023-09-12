import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPopularMovies } from '../Serviece/api'

function RecommendedMovieDetail() {
  // useParams 훅을 사용하여 URL에서 movieId 매개변수를 추출
    const { movieId } = useParams();
    // movieDetails 상태를 관리하는 useState 훅을 선언합니다. 초기값은 nul임
    const [movieDetails, setMovieDetails] = useState(null);

    // useEffect 훅을 사용하여 컴포넌트가 마운트될 때 영화 상세 정보를 가져옴
    useEffect(() => {
        const fetchMovieDetails = async (id) => {
            try {
                // 인기 영화 목록을 가져옴
                const popularMovies = await fetchPopularMovies();
                // 인기 영화 목록에서 id와 일치하는 영화 상세 정보를 찾음
                const movieDetail = popularMovies.find(movie => movie.id === parseInt(id));
                
                if (movieDetail) {
                    // 영화 상세 정보를 찾았다면, movieDetails 상태를 업데이트
                    setMovieDetails(movieDetail);
                } else {
                    // 일치하는 영화가 없다면 콘솔에 오류 메시지를 출력
                    console.error('영화를 찾을 수 없습니다');
                }
                
            } catch (error) {
                // 데이터를 가져오는 중 오류가 발생하면 콘솔에 오류 메시지를 출력
                console.error('영화 상세 정보를 가져오는 중 오류 발생:', error);
            }
        };

        // movieId를 인수로 전달하여 fetchMovieDetails 함수를 호출
        fetchMovieDetails(movieId);
    }, [movieId]);

    // movieDetails가 null인 경우 로딩 표시요소를 반환
    if (!movieDetails) {
        return <div></div>;
    }

    return (
    <div style={{ position: 'relative', display: 'flex', padding: '20px', height: '500px', display: 'flex' }}>

        {/* 배경 이미지 섹션: 10% 투명도를 가진 배경 이미지를 설정 */}
        <div style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path})`,
            backgroundSize: 'cover',
            opacity: '0.1',
            zIndex: 5
        }}></div>

        {/* 이미지 섹션: 영화의 백드롭 이미지를 표시 */}
        <div style={{ 
        width: '50%', 
        marginRight: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        }}>
            {movieDetails.backdrop_path && (
                <img 
                src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} 
                alt={movieDetails.title} 
                style={{ 
                    objectFit: 'cover' 
                }} 
            />
            )}
        </div>

        {/* 상세 정보 섹션: 영화의 제목과 개봉년도, 줄거리를 표시. */}
        <div style={{ 
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    }}>
            {/* 제목 섹션: 영화의 제목과 개봉년도를 표시 */}
            <div>
                <h1>
                    {movieDetails.title} 
                    {/* 개봉년도를 추출하여 표시. 개봉년도 정보가 없는 경우 'N/A'를 표시. */}
                    <span>({movieDetails.release_date?.substring(0,4) || 'N/A'})</span>
                </h1>
            </div>

            {/* 시놉시스 섹션: 영화의 줄거리를 표시. */}
            <div style={{ marginTop: '20px' }}>
            {
                movieDetails.overview && (
                    <>
                        <p style={{ textAlign: 'justify' }}>
                            {/* 줄거리의 첫 번째 부분을 표시 */}
                            {movieDetails.overview.substring(0, Math.floor(movieDetails.overview.length / 3))}
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            {/* 줄거리의 나머지 부분을 표시 */}
                            {movieDetails.overview.substring(Math.floor(movieDetails.overview.length /3))}
                        </p>
                    </>
                )
            }
            </div>
        </div>
    </div>
    );
}

export default RecommendedMovieDetail;