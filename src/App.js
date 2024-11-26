import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import YoutubeVideos from './pages/YoutubeVideos';
import Courses from './pages/Courses';
import CourseVideosComponent from './pages/CourseVideosComponent';
import CourseBuyCard from './pages/CourseBuyCard';

const sampleCourse = {
  id: 1,
  name: "AlgorithmMind Courses",
  image: "https://st2.depositphotos.com/1025323/5817/i/450/depositphotos_58175143-stock-photo-toward-digital-reason.jpg", // Replace with actual image URL
  price: 99,
  features: [
    "Comprehensive React course",
    "Hands-on projects",
    "Lifetime access",
    "Certificate of completion",
    "Access to a community of learners",
  ],
};


function App() {
  // const sampleCourse = {
  //   id: 1,
  //   name: 'Data Structures and Algorithms (DSA)',
  //   videos: [
  //     { id: 1, title: 'Introduction to DSA', youtubeId: 'gwB8C7YCpH0' },
  //     { id: 2, title: 'Linked Lists in DSA', youtubeId: 'video2' },
  //     { id: 3, title: 'Stacks and Queues', youtubeId: 'video3' },
  //     { id: 4, title: 'Sorting Algorithms', youtubeId: 'video4' },
  //     { id: 5, title: 'Graphs and Trees', youtubeId: 'video5' },
  //   ],
  // };
  return (
    // <div>
    //   <Home></Home>
    // </div>
    <Router>
    <Navbar /> {/* Navbar will be shown on all pages */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} /> {/* Login route */}
      <Route path="/signup" element={<Signup />} /> {/* Signup route */}
      <Route path="/youtube" element={<YoutubeVideos/>} />

      <Route path="/buy" element={<CourseBuyCard course={sampleCourse}/>}/>


      <Route path="/courses" element={<Courses/>}/>
  
    </Routes>
   </Router> 
  );
}

export default App;
