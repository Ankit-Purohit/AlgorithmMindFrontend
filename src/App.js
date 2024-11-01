import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import YoutubeVideos from './pages/YoutubeVideos';

function App() {
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
    </Routes>
   </Router> 
  );
}

export default App;
