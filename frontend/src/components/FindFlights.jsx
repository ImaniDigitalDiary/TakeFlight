import React from 'react'

// styles
import '../styling/find-flights.css'
import { BsArrowLeftRight } from "react-icons/bs";

// components
import DateCalender from './DateCalender'
import Travelers from './Travelers'

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
        {/* FROM AND TO */}
        <div className='inputCont'>
            <div className='fromAndTo'>
            <div className='fromDiv'>
              <label className='fromHeading'>
                From*
              </label>
              <input  type='text' id='from' name='from' required className='from' />
            </div>

            <div className='toDiv'>
              <label className='toHeading'>
                To*
              </label>
              <input  type='text' id='to' name='to' required className='to' />
            </div>
          </div>

          {/* DATES AND TRAVELERS */}
          <div className='datesAndTrav'>
          <DateCalender />
          <Travelers />
          </div>
        </div>

        {/* FIGHT CLASS */}
        <div className="chooseClassDiv">
          <label htmlFor='chooseClassSelect' className='chooseClassHeading'></label>
          <select name="chooseClass" id="chooseClass" className='chooseClass'>
            <option value="">Economy</option>
            <option value="">Premium economy</option>
            <option value="">Business of First</option>
          </select>
        </div>

        <div>
          <h3>Advanced search</h3>
          <p>(Certificates, multi-city and upgrades)</p>
          <p>Changed bag rules and fees for optional servies</p>
        </div>

        


        
        


        
        
        
            

      </div>
    </div>
  )
}

export default FindFlights
