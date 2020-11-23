import React from 'react'
import { Carousel } from 'react-bootstrap';
// import Carousel from "react-multi-carousel";
import Slider_1 from '../../img/Slider-1.jpg';

const HomeSlider = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item interval={1000}>
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
                src={Slider_1}
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
                src={Slider_1}
                style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
                }}
            />
            </Carousel.Item>
        </Carousel>
           {/* <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={6000}
            centerMode={false}
            className=""
            containerClass=""
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 1
                },
                mobile: {
                breakpoint: {
                    max: 464,
                    min: 0
                },
                items: 1
                },
                tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 1
                }
            }}
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
            >
            <img
                src={Slider_1}
                style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
                }}
            />
            <img
                src={Slider_1}
                style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
                }}
            />
            <img
                src={Slider_1}
                style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
                }}
            />
            </Carousel>  */}
        </>
    )
}

export default HomeSlider
