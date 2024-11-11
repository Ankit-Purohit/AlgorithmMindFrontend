import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Updated import path

import "../css/CarouselSlider.css";

const CarouselSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      className="carousel-slider"
    >
      <SwiperSlide className="slide" style={{ backgroundImage: `url('/images/corecse.jpg')` }}>
        <div className="slide-content">
          <h2>Core Computer Science Courses</h2>
          <p>Build a strong, comprehensive foundation in Core Computer Science principles that are crucial for careers in software development.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide" style={{ backgroundImage: `url('/images/posterframe.webp')` }}>
        <div className="slide-content">
          <h2>Data Structure and Algorithm </h2>
          <p>Unlock the power of efficient problem-solving and optimization with our comprehensive Data Structures and Algorithms course.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide" style={{ backgroundImage: `url('/images/dmath.jpeg')` }}>
        <div className="slide-content">
          <h2>Discrete Mathematics for Computer Science </h2>
          <p>Dive deep into the fundamental principles of Discrete Mathematics, the backbone of computer science and algorithmic problem-solving. </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselSlider;
