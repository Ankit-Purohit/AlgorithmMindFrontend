import React from 'react';

const CourseVideosComponent = ({ course }) => {
  return (
    <div className="course-videos">
      {course ? (
        <>
          <h2>{course.name} Videos</h2>
          <div className="videos-list">
            {course.videos.map(video => (
              <div key={video.id} className="video-item">
              
                {/* <video controls>
                  <source src="https://www.youtube.com/watch?v=gwB8C7YCpH0" type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
                      <iframe
        src="https://www.youtube.com/watch?v=4nIReQJIeCE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
                <div className='vid-title-des'>

                <h5>{video.title}</h5>
                <p>
                Haanji!! Last year US Tour Karne gaya tha.. toh yeh sab harkatein hui thi mere sath.. Ab iss saal bhi nikle hai firse tour karne toh dekho kya hota hai.. tab tak tum yeh video dekhlo aur apne...
                </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Please select a course to view the videos.</p>
      )}
    </div>
  );
};

export default CourseVideosComponent;
