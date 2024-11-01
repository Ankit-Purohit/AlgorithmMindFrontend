import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CourseCard from './CourseCard';
import '../css/CourseSlider.css';

const CourseSlider = ({ courses }) => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="course-slider-container">


        <div className='fang'>
        <img  src="https://media.licdn.com/dms/image/C5612AQGCfrj9L1mXBQ/article-cover_image-shrink_600_2000/0/1627362235506?e=2147483647&v=beta&t=buld20GCl2opSmQetmFxHXZkrx-myyy-l6TyedVjkIY" alt="External Logo" /> 
        <h3>Cracking fang is now easy with the help of our courses </h3>
      
        </div>
        <h2>Course Available</h2>
       {/* Previous Button */}
      <button className="slider-button prev-button" onClick={handlePrev}>
        Previous
      </button>

      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <CourseCard
              title={course.title}
              description={course.description}
              image={course.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Next Button */}
      <button className="slider-button next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default CourseSlider;
