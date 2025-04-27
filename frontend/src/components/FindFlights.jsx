import React from 'react'

// BOOTSTRAP
import Card from 'react-bootstrap/Card'

// STYLES
import '../styling/find-flights.css'
import { BsArrowLeftRight } from "react-icons/bs";
  // FONT AWESOME ICONS
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
  import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
  import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import DateCalender from './DateCalender'
import Travelers from './Travelers'
import Carousel from './Carousel';




function FindFlights() {

  
  return (
    <>
    <div className='findFlightsWrapper'>
      <Carousel />

      {/*  OVERLAY CONTENT */}
      <div className='findFlightsContent'>
        <div className='findFlights'> 
          <div className='findFlightsForm'>

            {/* LINKS 1 */}
            <div className='links1Div'>
              <ul className='links1Ul'>
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
                <li className='links2 cruise'><span className='cruise'>Cruise <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span></li>
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
                    From
                  </label>
                  <input  type='text' id='from' name='from' required className='from' placeholder='Cleveland CLE'/> 
                </div>
                <div className='faArrowRightArrowLeftDiv'>
                  <FontAwesomeIcon icon={faArrowRightArrowLeft} className='faArrowRightArrowLeft' />
                </div>
                <div className='toDiv'>
                  <label className='toHeading'>
                    To
                  </label>
                  <input  type='text' id='to' name='to' required className='to' placeholder='Destination' />
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


            <div className='advSearchDiv'>
              <div className='advSearchText'>
                <h3>Advanced search <span><FontAwesomeIcon icon={faAngleRight} /></span></h3> 
                <p>(Certificates, multi-city and upgrades)</p>
                <p>Changed bag rules and fees for optional servies</p>
              </div>
              <div className='advSearchButtons'>
                <button className='findFlightsBtn'>Find flights</button>
                <button className='creditsBtn'>Find your travel credits</button>
              </div>
            </div>
          </div>
        </div>


        <div className='cardAndBonus'>
          <div>
            <Card className='card' style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Subtitle className='cardSubtitle mb-2 text-muted'>New in 2025</Card.Subtitle>
              <Card.Title className='cardTitle'>Enjoy the warmth of these new TakeFlight destinations.</Card.Title>
              {/* <Card.Text>
                text placed here for the moment. i would like for it to be a card that changed w/ arrows
              </Card.Text> */}
              <Card.Link className='cardLink' href='#'>Explore routes<FontAwesomeIcon icon={faAngleRight} /> </Card.Link>
              {/* <Card.Link href='#'>Another Link</Card.Link> */}
            </Card.Body>
          </Card>
          </div>

          <div className='bonusAndAnnFee'>
          <div className='bonus'>
          <h4 className='bonusH4'>80,000</h4>
          <div className='bonusSpanDiv'>
            <span className='bonusSpan'>Bonus</span>
            <span className='bonusSpan'>Miles</span>
          </div>
          
        </div>

        <div className='annFee'>
          <p className='annFeePara'>$0 intro annual fee</p>
          <button className='annFeeBtn'>Learn more</button>
        </div>
        </div>
        </div>
      </div>
    </div>

    </>  
  )
}

export default FindFlights