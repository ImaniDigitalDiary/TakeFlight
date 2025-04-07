import React from 'react'

// styles
  import '../styling/navbar.css'
  // bootstrap
  import { Form, Container, Navbar, Nav } from 'react-bootstrap'


function FindFlights() {
  return (
    <div className='findFlights'> 
      <div className='findFlightsForm'>
        <div className='links1'>
          <ul>
            <li className='book'>Book</li>
            <li className='flightStatus'>Flight Status</li>
            <li className='checkIn'>Check-in</li>
            <li className='myTrips'>My Trips</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FindFlights
