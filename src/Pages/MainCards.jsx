import React from 'react'
import './MainCards.css'
import Data from './Data.json'
import Cards from './Cards'



function MainCards() {
  return (
    <div className='our-tacher-css'>
        <h1 className='Our-teacher'>Our Faculty</h1>
        <p className='paragrap'>
            Meet our dedicated team of professional educators committed to academic excellence and student success.
        </p>

    <div className='Main-card'>

            {  Data.map(function(elem){
        return <Cards
         key={elem.Email} 
         Image={elem.Image}
         Name= {elem.Name}
         MobileNumber ={elem.MobileNumber}
         Email={elem.Email}
         Education={elem.Education}
         Experience={elem.Experience}
         />

       })}
   
    </div>

    </div>
  )
}

export default MainCards 