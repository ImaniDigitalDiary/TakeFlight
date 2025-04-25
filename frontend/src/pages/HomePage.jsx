import React from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'
import FindFlights from '../components/FindFlights'

function HomePage() {
  return (
    <div className='homePage'>
        <Navbar />
        <FindFlights />
    </div>
  )
}

export default HomePage
