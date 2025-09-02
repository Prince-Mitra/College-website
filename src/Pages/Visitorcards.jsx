import React from 'react'
import './Visitorcards.css'

function Visitorcards() {
  return (
    <div className='vistor-div'>


    <div className='visitor-card'>
        <div className='first-div'>
        <div className='first-img'>
            <img className='first-css' src="./Image/Droupadi.jpg" alt="" />
        </div>
        <h2> Droupadi Murmu</h2>
        <h4>President of the Republic of India</h4>
        </div>



        <div className='second-div'>
        <div className='Second-img'>
            <img  className='second-css' src="./Image/voice-chancellor.jpg" alt="" />
        </div>
        <h2>Prof. Kshiti Bhusan Das</h2>
        <h4>The Central University of Jharkhand</h4>
        </div>


        <div className='third-div'>
        <div className='third-img'>
            <img className='third-css' src="./Image/Santosh_Kumar.jpg" alt="" />
        </div>
        <h2>Santosh Kumar Gangwar</h2>
        <h4>Governor of Jharkhand</h4>
        </div>
        

    </div>
    </div>
  )
}

export default Visitorcards