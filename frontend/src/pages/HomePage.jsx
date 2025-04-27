import React from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'
import FindFlights from '../components/FindFlights'
import SponsorTravelInspo from '../components/SponsorTravelInspo'
import Map from '../components/Map'

function HomePage() {
  return (
    <div className='homePage'>
        <Navbar />
        <FindFlights />
        <SponsorTravelInspo />
        <Map />
    </div>
  )
}

export default HomePage
