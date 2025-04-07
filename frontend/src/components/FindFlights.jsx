import React from 'react'

// styles
  import '../styling/navbar.css'
  // bootstrap
  import { Form, Container, Navbar, Nav } from 'react-bootstrap'


function FindFlights() {
  return (
    <div className='findFlights'> 
      <div className='findFlightsForm'>

        {/* LINKS 1 */}
        <div className='links1'>
          <ul className='links1'>
            <li className='links1 book'>Book</li>
            <li className='links1 flightStatus'>Flight Status</li>
            <li className='links1 checkIn'>Check-in</li>
            <li className='links1 myTrips'>My Trips</li>
          </ul>
        </div>

        {/* LINKS 2 */}
        <div className='links2'>
          <ul>
            <li className='links2 flight'>Flight</li>
            <li className='links2 packages'>Packages</li>
            <li className='links2 hotel'>Hotel</li>
            <li className='links2 car'>Car</li>
            <li className='links2 cruise'>Cruise</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FindFlights
