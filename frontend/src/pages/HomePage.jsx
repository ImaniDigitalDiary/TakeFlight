import React from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'
import FindFlights from '../components/homepage-components/FindFlights'
import SponsorTravelInspo from '../components/homepage-components/SponsorTravelInspo'
import ExploreDest from '../components/homepage-components/ExploreDest'
import UsefulLinks from '../components/homepage-components/UsefulLinks'
import CarouselTwo from '../components/homepage-components/CarouselTwo'

function HomePage() {
  return (
    <div className='homePage'>
        <Navbar />
        <FindFlights />
        <SponsorTravelInspo />
        {/* <Map /> */}
        <ExploreDest />
        <UsefulLinks />
        <CarouselTwo />
    </div>
  )
}

export default HomePage
