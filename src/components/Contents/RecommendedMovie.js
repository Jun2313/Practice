import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { fetchPopularMovies } from '../../Serviece/api'
import RecommendedMovieDetail from '../../screens/RecommendedMovieDetail'

function RecommendedMovie() {
    // 영화 목록과 출시 날짜를 저장하기 위한 상태 변수를 선언
    const [movies, setMovies] = useState([]);
    const [releaseDates, setReleaseDates] = useState({});

    // 슬라이더를 참조하기 위한 ref를 생성.
    const sliderRef = useRef(null);

    // 슬라이더의 설정을 정의.
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    // 다음 슬라이드로 이동하는 함수를 정의.
    const next = () => {
        sliderRef.current.slickNext();
    };

    // 이전 슬라이드로 이동하는 함수를 정의.
    const previous = () => {
        sliderRef.current.slickPrev();
    };

    // 컴포넌트가 마운트 될 때 인기 영화 목록을 가져오는 함수를 호출.
    useEffect(() => {
        const fetchMoviesAndReleaseDates = async () => {
            try {
                // 인기 영화 목록을 가져옴.
                const moviesData = await fetchPopularMovies();
                if(moviesData) {
                    console.log(moviesData); // 가져온 데이터를 콘솔에 로그.
                    setMovies(moviesData); // 가져온 데이터를 상태 변수에 설정.
                }
            } catch (err) {
                console.error(err); // 에러가 발생하면 콘솔에 에러 메시지를 출력.
            }
        };
        fetchMoviesAndReleaseDates(); // 함수를 호출하여 인기 영화 목록을 가져옴.
    }, []);

    return (
        <>
        <RecommendedMovieDetail />
        <ul style={{ padding: 0, margin: 0, height: '400px' }}>
            <li style={{ listStyleType: 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <button onClick={previous}>Previous</button>
                    <button onClick={next}>Next</button>
                </div>
            </li>
            <li style={{ listStyleType: 'none' }}>
                <Slider ref={sliderRef} {...settings}>
                    {movies.map((movie, index) => (
                        <div key={index} style={{ margin: '0 10px' }}>
                            <Link to={`/movie/${movie.id}`}>
                                <img 
                                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
                                alt={movie.title}
                                style={{ maxWidth: '100%', height: 'auto' }}
                                />
                            </Link>
                            <p>{movie.title}</p>
                            <p>개봉일 : {movie.release_date}</p>
                        </div>
                    ))}
                </Slider>
            </li>
        </ul>
        </>
    );
}

export default RecommendedMovie;