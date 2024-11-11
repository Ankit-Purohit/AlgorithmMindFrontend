import React from 'react'
import Navbar from '../pages/Navbar'
import HeroSection from '../pages/HeroSection'
import CourseSlider from '../pages/CourseSlider'
import CourseCard from '../pages/CourseCard'
import '../css/Home.css';
import Questions from '../pages/Questions'
import Footer from '../pages/Footer'
import CarouselSlider from '../pages/CarouselSlider'

const courses = [
    {
      title: "React for Beginners",
      description: "Learn the basics of React and build dynamic web apps.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Advanced JavaScript",
      description: "Master JavaScript concepts for more robust applications.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Web Design Fundamentals",
      description: "Explore web design principles for better UI/UX.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Data Structures and Algorithms",
      description: "Deep dive into DSA for efficient coding practices.",
      image: "https://via.placeholder.com/150",
    },
    // Add more courses as needed
  ];
const Home = () => {
  return (
    <div className='papa'>
{/* 
        <Navbar></Navbar> */}
         <CarouselSlider></CarouselSlider>
         <HeroSection></HeroSection>
       
        {/* <Carousel></Carousel> */}
        <div className='course_container'>
         <CourseSlider  courses={courses}/>
        </div>
        <Questions></Questions>
        <Footer></Footer>
       

      
      
    </div>
  )
}

export default Home
