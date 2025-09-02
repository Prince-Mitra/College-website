import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100); // small delay for animation
  }, []);

  return (
    <div className={`about-section ${visible ? "visible" : ""}`}>
      <h2 className="about-heading">
        About Us
        <span className="underline"></span>
      </h2>
      <div className="about-card">
        <p>
          <strong>Model College Rajmahal</strong>, established in <strong>2022</strong>, 
          is a leading institution of higher learning located in the historic town of 
          Rajmahal, Sahibganj district, Jharkhand. The college was founded with a vision 
          to impart <strong>value-based quality education</strong> and to nurture 
          young minds into capable professionals and responsible citizens.
        </p>
        <p>
          Our academic programs are thoughtfully designed to balance 
          <strong> theoretical knowledge</strong> with <strong>practical exposure</strong>. 
          We emphasize critical thinking, creativity, and research to prepare students 
          for diverse career paths in a rapidly changing world. 
        </p>
        <p>
          Beyond academics, Model College Rajmahal places great importance on 
          <strong>co-curricular and extra-curricular activities</strong>. Students are 
          encouraged to participate in seminars, workshops, cultural events, and sports, 
          fostering <strong>holistic development</strong> and leadership skills.
        </p>
        <p>
          The college campus provides a <strong>conducive learning environment</strong>, 
          equipped with modern classrooms, well-stocked libraries, advanced laboratories, 
          and digital resources. We are committed to <strong>inclusive education</strong>, 
          ensuring that students from diverse backgrounds have access to opportunities 
          for academic and personal growth.
        </p>
        <p>
          As we look ahead, Model College Rajmahal continues to strive toward 
          <strong> academic excellence, innovation, and community engagement</strong>. 
          Our goal is to shape graduates who are not only <strong>knowledgeable</strong> 
          but also <strong>socially responsible, ethically grounded, and globally aware</strong>.
        </p>
      </div>
    </div>
  );
}

export default About;
