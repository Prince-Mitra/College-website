import React from 'react'
import ImageSlider from './ImageSlider'
import CourseDetails from '../Pages/CourseCard'
import NewHeader from './NewHeader.jsx'
import NoticeBoard from './NoticeBoard.jsx'
import AboutCollege from './AboutCollege.jsx'
import Visitorcard from '../Pages/Visitorcards.jsx'

const Home = () => {
  return (
    <div>
      <ImageSlider/>
      <NewHeader/>
      <AboutCollege/>
      <NoticeBoard/>
      <CourseDetails/>
      <Visitorcard/>
    </div>
  )
}

export default Home
