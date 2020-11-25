import React from 'react'
import { Carousel } from 'react-bootstrap';
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import Slider_1 from '../../img/Slider-1.jpg';
import Slider_2 from '../../img/Slider-2.jpg';
import Slider_3 from '../../img/Slider-3.jpg';

const HomeSlider = () => {
    return (
        <>
        <Carousel
        nextIcon={<GoChevronRight />}
        prevIcon={<GoChevronLeft />}
        >
            <Carousel.Item interval={5000}>
            <img
                src={Slider_1}
                style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
                }}
            />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
            <img
                src={Slider_2}
                style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
                }}
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                src={Slider_3}
                style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
                }}
            />
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default HomeSlider
