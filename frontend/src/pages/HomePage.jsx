import React from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'
import FindFlights from '../components/FindFlights'
import SponsorTravelInspo from '../components/SponsorTravelInspo'

function HomePage() {
  return (
    <div className='homePage'>
        <Navbar />
        <FindFlights />
        <SponsorTravelInspo />
    </div>
  )
}

export default HomePage
