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

    <div className="guidelines">
        <h1 className="guidelinesHeader">Travel information and guidelines</h1>
        <p className="guidelinesHeaderPara">Use the information on this page to help you through your next trip.</p>
    </div>
    
    </>
  )
}

export default TravelInfoPage
