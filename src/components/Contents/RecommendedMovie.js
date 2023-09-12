import React, { useEffect, useState, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function RecommendedMovie() {
    const [movies, setMovies] = useState([]);
    const sliderRef = useRef(null);

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    };

    const next = () => {
    sliderRef.current.slickNext();
    };

    const previous = () => {
    sliderRef.current.slickPrev();
    };

    useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDY1NmM5N2U4N2QyZWVmYTlhMzVmYzk0MTAzNzAzNCIsInN1YiI6IjY0ZmFiZTg5ZGMxY2I0MDEzZDBlMzQ1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OUxPq3OA-n1Y29v0mm8DXMALusTaVCAOFn9QW6kiqZg'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.error(err));
    }, []);

    return (
        <ul style={{ padding: 0, margin: 0 , height: '400px'}}>
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
                            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}
                            style={{ maxWidth: '100%', height: 'auto'}} />
                            <p>{movie.title}</p>
                        </div>
                    ))}
                </Slider>
            </li>
        </ul>
    );
}

export default RecommendedMovie;