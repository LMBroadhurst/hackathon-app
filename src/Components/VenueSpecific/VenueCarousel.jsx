import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

const VenueCarousel = () => {
  return (
    <section>
      <div className="carousel rounded-3xl mx-auto">
        <div id="slide1" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" alt='' />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle btn-sm">❮</a> 
            <a href="#slide2" className="btn btn-circle btn-sm">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" alt=''/>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle btn-sm">❮</a> 
            <a href="#slide3" className="btn btn-circle btn-sm">❯</a>
            </div>
        </div> 
      </div>
    </section>
  )
}

export default VenueCarousel