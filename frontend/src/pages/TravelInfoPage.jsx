import React from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'

// STYLING
import '../styling/travel-info.css'

// IMAGES
import travelInfoImage from '../images/travel-info-image.png'

function TravelInfoPage() {
  return (
    <>
    <Navbar />
    <div className='travelInfoImageDiv'>
      <img className='travelInfoImage' src={travelInfoImage} alt="Travel Info Image of airplane in the sky" />
    </div>
    
    </>
  )
}

export default TravelInfoPage
