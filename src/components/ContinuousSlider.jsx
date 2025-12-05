import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './ContinuousSlider.css';

const ContinuousSlider = ({ images }) => {

    const sliderData = [...images, ...images, ...images, ...images];

    return (
        <section className="continuous-visual-slider">
            <Swiper
                slidesPerView={'auto'}
                loop={false}
                allowTouchMove={false}
                className="continuousSwiper"
            >
                {sliderData.map((img, index) => (

                    <SwiperSlide key={`${index}-${Math.random()}`} className="continuous-slide">
                        <img
                            src={img}
                            alt={`Galleria TA.GE ${index}`}
                            className="continuous-slider-image"
                            loading="lazy"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ContinuousSlider;