import React from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'

// STYLING
import '../styling/my-trips.css'

function MyTripsPage() {
  return (
    <div className='myTripsPage'>
        <Navbar />
        <div className="myTripsDiv1">
            <div className="myTripsDiv1Text">
                <h1>My trips</h1>
                <div>Looking for a receipt? <a href="#">Search receipts</a></div>

            </div>
            

        </div>
      
    </div>
  )
}

export default MyTripsPage
