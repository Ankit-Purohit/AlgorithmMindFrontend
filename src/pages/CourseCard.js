import React from 'react';
import '../css/CourseCard.css';

const CourseCard = ({ title, description, image }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <h3 className="course-title">{title}</h3>
      <p className="course-description">{description}</p>
    </div>
  );
};

export default CourseCard;
