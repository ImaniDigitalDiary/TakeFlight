import React, { useState } from 'react'

// styles
  import '../styling/navbar.css'

// date input
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'


function FindFlights() {
  // Book Date input - useState hook
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])
    
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
          <label className='customCircleRadio'>
            <input type='radio' name='roundTrip' value=''/><span className='circleRadio'></span>Round Trip
          </label>
          <label className='customCircleRadio'>
            <input type='radio' name='oneWay' value=''/><span className='circleRadio'></span>One-way
          </label>
          
          <label className='customSquareRadio'>
            <input type='radio' name='miles' value='' /> <span className='squareRadio'></span>Book with miles
          </label>
          <label className='customSquareRadio'>
            <input type='radio' name='flexibleDates' value=''/><span className='squareRadio'></span>Flexible dates
          </label> 
        </div>

        {/* TEXT INPUTS */}
        <label>
          From*
            <input type='text' id='from' name='from' required className='from' />
        </label>
        <label>
          To*
            <input type='text' id='from' name='from' required className='from' />
        </label>
        <label for='start'>
          To*
            <input type='text' id='from' name='from' required className='from' />
        </label>
      </div>
    </div>
  )
}

export default FindFlights
