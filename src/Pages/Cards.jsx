import React from 'react'
import './Cards.css'

function Cards(props) {
  return (
    <div className='Cards-container'>
        <div className='Cards-container-two'>
            <img className='Image-css' src={props.Image} alt="" />
            <h1  className='Name-css'>{props.Name}</h1>
            <h3 className='Mobile-number-css'> Mobile No. {props.MobileNumber}</h3>
            <h3 className='email-css'> Email - {props.Email}</h3>
            <h3 className='education-css'> Profession- {props.Education}</h3>
            <h3 className='experience-css'>{props.Experience}</h3>
        </div>
        
    </div>
  )
}

export default Cards