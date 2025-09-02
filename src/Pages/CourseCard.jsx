import React from 'react';
import './CourseCard.css'; 

const CourseCard = ({ course }) => {
  return (
    
        
    <div className="course-card">
      <h2> {course.title}</h2>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Eligibility:</strong> {course.eligibility}</p>
      <p><strong>Description:</strong> {course.description}</p>
   
    </div>
  );
};

const CourseDetails = () => {
  const courses = [
    {
      title: 'Bachelor of Arts (B.A.)',
      duration: '3 years',
      eligibility: '10+2 or equivalent',
      description: 'A degree focusing on liberal arts, humanities, and social sciences.'
    },
    {
      title: 'Bachelor of Science (B.Sc.)',
      duration: '3 years',
      eligibility: '10+2 with Science',
      description: 'A degree focusing on scientific and technical disciplines.'
    },
    {
      title: 'Bachelor of Commerce (B.Com)',
      duration: '3 years',
      eligibility: '10+2 or equivalent',
      description: 'A degree focusing on commerce, business, and finance.'
    }
  ];

  return (
    <div className='course-name' id="course">
       
        <div className='Titile-paragraph'>
             <div className='Tilte-css'> <h1>Our Popular Course</h1></div>
         <p>Explore comprehensive degree programs designed to shape your future. Discover BA, BSC, and B.COM pathways that align with your passion and career goals.</p>
        </div>
    
     <div className="course-container">
        
      {courses.map((course, index) => (
        <CourseCard key={index} course={course}
         />
        
      ))}
     
     </div>
    </div>
  );
};

export default CourseDetails;
