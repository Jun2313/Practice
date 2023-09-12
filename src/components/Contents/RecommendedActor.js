//import React from 'react';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';   

function RecommendedActor() {

    return (
        <div className="RecommendedActor">
                <Carousel cols={3} rows={2} gap={10} loop>
                <Carousel.Item>
                    <h3>a</h3>
                </Carousel.Item>
                <Carousel.Item>
                    <h3>aa</h3>
                </Carousel.Item>
                <Carousel.Item>
                    <h3>aaa</h3>
                </Carousel.Item>
                <Carousel.Item>
                    <h3>aaaa</h3>
                </Carousel.Item>
                <Carousel.Item>
                    <h3>aaaaa</h3>
                </Carousel.Item>
                </Carousel>
        </div>
    );
}

export default RecommendedActor;
