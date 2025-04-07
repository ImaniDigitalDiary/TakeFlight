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
          <ul className='links2'>
            <li className='links2 flight'>Flight</li>
            <li className='links2 packages'>Packages</li>
            <li className='links2 hotel'>Hotel</li>
            <li className='links2 car'>Car</li>
            <li className='links2 cruise'><span className='cruise'>Cruise</span></li>
          </ul>
          <hr />
        </div>

        {/* RADIO LINKS */}
        <div className='radioLinks'>
          <input type='radio' name='roundTrip' value=''/>Round Trip
          <input type='radio' name='oneWay' value=''/>One-way
          <label className='customRadio'>
            <input type='radio' name='miles' value='' /> <span className='squareRadio'></span>Book with miles
          </label>
          <label className='customRadio'>
            <input type='radio' name='flexibleDates' value=''/><span className='squareRadio'></span>Flexible dates
          </label> 
        </div>
      </div>
    </div>
  )
}

export default FindFlights
