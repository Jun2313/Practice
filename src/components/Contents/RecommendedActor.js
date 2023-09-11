import React from 'react';
import Carousel from 'react-bootstrap/Carousel';   

function RecommendedActor() {
    return (
        <div className="RecommendedActor">
            <Carousel className='Carousel'>
                    <Carousel.Item interval={2000} className='Carousel.Item'>
                        <h3>김태희</h3>
                    </Carousel.Item>
                    <Carousel.Item interval={2000} className='Carousel.Item'>
                        <h3>송혜교</h3>            
                    </Carousel.Item>
                    <Carousel.Item interval={2000} className='Carousel.Item'>
                        <h3>전지현</h3>            
                    </Carousel.Item>
                    <Carousel.Item interval={2000} className='Carousel.Item'>
                        <h3>박보영</h3>              
                    </Carousel.Item>
                    <Carousel.Item interval={2000} className='Carousel.Item'>
                        <h3>전도연</h3> 
                    </Carousel.Item>
                </Carousel>
        </div>
    );
}

export default RecommendedActor;
