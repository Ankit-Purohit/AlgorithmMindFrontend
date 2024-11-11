import React, { useState } from 'react';

const CourseListComponent = ({ courses, onSelectCourse }) => {
  return (
    <div className="course-list">
      {courses.map(course => (
        <div
          key={course.id}
          className="course-item"
          onClick={() => onSelectCourse(course)} // Pass the selected course to parent
        >
          <h3>{course.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CourseListComponent;
