import React, { useState, useEffect } from 'react';
import CourseListComponent from './CourseListComponent';
import CourseVideosComponent from './CourseVideosComponent';
import '../css/Courses.css'
import SearchBar from './SearchBar';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch courses data from API (you can replace with actual API call)
  useEffect(() => {
    const fetchCourses = async () => {
      const data = [
        {
          id: 1,
          name: 'DSA',
          videos: [
            { id: 1, title: 'Introduction to DSA', url: 'https://www.youtube.com/watch?v=gwB8C7YCpH0' },
            { id: 2, title: 'Linked Lists in DSA', url: 'video2.mp4' },
            { id: 3, title: 'Stacks and Queues', url: 'video3.mp4' },
            { id: 4, title: 'Sorting Algorithms', url: 'video4.mp4' },
            { id: 5, title: 'Graphs and Trees', url: 'video5.mp4' }
          ],
        },
        {
          id: 2,
          name: 'Java',
          videos: [
            { id: 1, title: 'Java Basics', url: 'java_video1.mp4' },
            { id: 2, title: 'OOP in Java', url: 'java_video2.mp4' },
            { id: 3, title: 'Collections Framework', url: 'java_video3.mp4' },
            { id: 4, title: 'Java Streams', url: 'java_video4.mp4' },
            { id: 5, title: 'Java Multithreading', url: 'java_video5.mp4' }
          ],
        },
        {
          id: 3,
          name: 'Python',
          videos: [
            { id: 1, title: 'Introduction to Python', url: 'python_video1.mp4' },
            { id: 2, title: 'Data Structures in Python', url: 'python_video2.mp4' },
            { id: 3, title: 'Python OOP', url: 'python_video3.mp4' },
            { id: 4, title: 'File Handling in Python', url: 'python_video4.mp4' },
            { id: 5, title: 'Python Libraries', url: 'python_video5.mp4' }
          ],
        },
        {
          id: 4,
          name: 'JavaScript',
          videos: [
            { id: 1, title: 'Introduction to JavaScript', url: 'js_video1.mp4' },
            { id: 2, title: 'JavaScript DOM Manipulation', url: 'js_video2.mp4' },
            { id: 3, title: 'Async JavaScript', url: 'js_video3.mp4' },
            { id: 4, title: 'JavaScript ES6 Features', url: 'js_video4.mp4' },
            { id: 5, title: 'JavaScript Design Patterns', url: 'js_video5.mp4' }
          ],
        },
        {
          id: 5,
          name: 'React',
          videos: [
            { id: 1, title: 'Introduction to React', url: 'react_video1.mp4' },
            { id: 2, title: 'React State Management', url: 'react_video2.mp4' },
            { id: 3, title: 'React Lifecycle Methods', url: 'react_video3.mp4' },
            { id: 4, title: 'React Hooks', url: 'react_video4.mp4' },
            { id: 5, title: 'Advanced React Patterns', url: 'react_video5.mp4' }
          ],
        },
        {
          id: 6,
          name: 'Data Science',
          videos: [
            { id: 1, title: 'Introduction to Data Science', url: 'ds_video1.mp4' },
            { id: 2, title: 'Data Preprocessing', url: 'ds_video2.mp4' },
            { id: 3, title: 'Machine Learning Basics', url: 'ds_video3.mp4' },
            { id: 4, title: 'Deep Learning Introduction', url: 'ds_video4.mp4' },
            { id: 5, title: 'Data Visualization', url: 'ds_video5.mp4' }
          ],
        },
        {
          id: 7,
          name: 'Machine Learning',
          videos: [
            { id: 1, title: 'ML Basics', url: 'ml_video1.mp4' },
            { id: 2, title: 'Supervised Learning', url: 'ml_video2.mp4' },
            { id: 3, title: 'Unsupervised Learning', url: 'ml_video3.mp4' },
            { id: 4, title: 'Reinforcement Learning', url: 'ml_video4.mp4' },
            { id: 5, title: 'Model Evaluation', url: 'ml_video5.mp4' }
          ],
        },
        {
          id: 8,
          name: 'Web Development',
          videos: [
            { id: 1, title: 'HTML Basics', url: 'web_video1.mp4' },
            { id: 2, title: 'CSS Styling', url: 'web_video2.mp4' },
            { id: 3, title: 'JavaScript Essentials', url: 'web_video3.mp4' },
            { id: 4, title: 'Responsive Design', url: 'web_video4.mp4' },
            { id: 5, title: 'Frontend Frameworks', url: 'web_video5.mp4' }
          ],
        },
        {
          id: 9,
          name: 'Database Management',
          videos: [
            { id: 1, title: 'Introduction to Databases', url: 'db_video1.mp4' },
            { id: 2, title: 'SQL Basics', url: 'db_video2.mp4' },
            { id: 3, title: 'Normalization', url: 'db_video3.mp4' },
            { id: 4, title: 'Joins in SQL', url: 'db_video4.mp4' },
            { id: 5, title: 'Database Indexing', url: 'db_video5.mp4' }
          ],
        },
        {
          id: 10,
          name: 'Cyber Security',
          videos: [
            { id: 1, title: 'Introduction to Cyber Security', url: 'cyber_video1.mp4' },
            { id: 2, title: 'Network Security Basics', url: 'cyber_video2.mp4' },
            { id: 3, title: 'Cryptography', url: 'cyber_video3.mp4' },
            { id: 4, title: 'Malware Analysis', url: 'cyber_video4.mp4' },
            { id: 5, title: 'Security Best Practices', url: 'cyber_video5.mp4' }
          ],
        },
        {
          id: 11,
          name: 'Cloud Computing',
          videos: [
            { id: 1, title: 'Introduction to Cloud', url: 'cloud_video1.mp4' },
            { id: 2, title: 'AWS Basics', url: 'cloud_video2.mp4' },
            { id: 3, title: 'Azure Fundamentals', url: 'cloud_video3.mp4' },
            { id: 4, title: 'GCP Overview', url: 'cloud_video4.mp4' },
            { id: 5, title: 'Cloud Security', url: 'cloud_video5.mp4' }
          ],
        },
        {
          id: 12,
          name: 'Blockchain',
          videos: [
            { id: 1, title: 'Blockchain Basics', url: 'blockchain_video1.mp4' },
            { id: 2, title: 'Cryptocurrency Overview', url: 'blockchain_video2.mp4' },
            { id: 3, title: 'Smart Contracts', url: 'blockchain_video3.mp4' },
            { id: 4, title: 'Decentralized Apps (DApps)', url: 'blockchain_video4.mp4' },
            { id: 5, title: 'Blockchain Use Cases', url: 'blockchain_video5.mp4' }
          ],
        },
        {
          id: 13,
          name: 'DevOps',
          videos: [
            { id: 1, title: 'Introduction to DevOps', url: 'devops_video1.mp4' },
            { id: 2, title: 'Continuous Integration', url: 'devops_video2.mp4' },
            { id: 3, title: 'Continuous Delivery', url: 'devops_video3.mp4' },
            { id: 4, title: 'Infrastructure as Code', url: 'devops_video4.mp4' },
            { id: 5, title: 'Monitoring and Logging', url: 'devops_video5.mp4' }
          ],
        }
      ];
      
      setCourses(data);
    };

    fetchCourses();
  }, []);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course); // Update selected course
  };
 
  return (
    <div className="app">
      <div className="left-side scroll">
        <CourseListComponent courses={courses} onSelectCourse={handleSelectCourse} />
      </div>
      <div className="right-side scroll">
        <CourseVideosComponent course={selectedCourse} />
      </div>
    </div>
  );
};

export default Courses;