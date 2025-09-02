import React from 'react';
import './AboutCollege.css';
import AboutUS from './AboutUS';
import OurMission from './OurMission';

function AboutCollege() {
  return (
    <div className='Main-div'>
     
      <div className='About-College'>
         <div className='sections-row'>
        
        <div className='Principal-img'>
          <img className='img-pri' src="./Image/principal.jpg" alt="Principal" />
          <h2>Dr Rinjit Kumar Singh</h2>
          <p>(Principal)</p>
        </div>
        
     

      {/* Flex container for AboutUS and OurMission */}
      
         <OurMission />
        <AboutUS />
       
      </div>
       </div>
    </div>
  );
}

export default AboutCollege;
