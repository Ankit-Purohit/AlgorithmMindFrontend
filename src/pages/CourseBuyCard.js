import React from 'react';
import '../css/CourseBuyCard.css';

const CourseBuyCard = ({ course }) => {
  return (
    <div className='course-buy-card-container'>
    <div className="course-buy-card">
      <div className="card-image" style={{ backgroundImage: `url(${course.image})` }}></div>
      <div className="card-content">
        <div className="card-header">
          <h3>{course.name}</h3>
          {/* <p>Enhance your skills in {course.name}</p> */}
        </div>
        <div className="card-price">
          <h2>₹{course.price}</h2>
          <p>One-time purchase for lifetime access for all my courses</p>
        </div>
        <div className="card-details">
          <ul>
            {course.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <button className="buy-button" onClick={() => handlePurchase(course.id)}>
          Buy Now
        </button>
      </div>
    </div>
  </div>
  );
};

const handlePurchase = (courseId) => {
  console.log(`Purchased course with ID: ${courseId}`);
};

export default CourseBuyCard;
