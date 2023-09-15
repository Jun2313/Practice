import React, { useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function RecommendedActor() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ActorName = ['김태희', '전지현', '박보영', '이나영', '김혜수', '한지민' ]
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    afterChange: (current) => {
      setCurrentSlide(current);
    },
  };


  
  return (
    <div className="RecommendedActor">
      <div>
        <h2>배우별 영화</h2>
        <Slider {...settings}>
          {ActorName.map((item) => (
            <div key={item}>
              <h3 className='ActorName'>{item}</h3>
            </div>
          ))}
        </Slider>
        <p>{currentSlide + 1}</p>
      </div>
    </div>
  );
}

export default RecommendedActor;
