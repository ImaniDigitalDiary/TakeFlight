import React from 'react'
import Navbar from '../components/Navbar'



// STYLING
import '../styling/help-center.css'
  // FONT AWESOME ICONS
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'

function HelpCenter() {
  return (
    <div className='helpCenterPage'>
    <Navbar />
    <div className='helpCenterPageMainDiv'>
      <div className='helpCenterDiv1'>
        <h1>Help Center</h1>
          <p className='helpCenterDiv1Para'>
            Find or select a flight for help with with a trip.
            <br />
            <a className='helpCenterDiv1Link'>Looking for something else?</a>
          </p>
          
      </div>
      <div className='helpCenterDiv2'>
        <h3>Which trip do you need help with?</h3>
        <div className="mileagePlusMainDiv">
          <div className='mileagePlusTextAndIcon'> 
            <FontAwesomeIcon icon={faBookmark} className='fa-xl' /> 
            <div className='mileagePlusText'>
              <h4>Sign in to MileagePlus</h4>
              <p>We can use your account information to find your trips.</p> 
            </div>              
          </div>
          <div className='mileagePlusBtns'>
              <button className='signInBtn'>Sign in</button>
              <button className='joinNowBtn'>Join now</button>
          </div>
        </div>     
      </div>

      {/* HELP CENTER DIV3 */}
      <div className='helpCenterDiv3'>
        <button className='findTripBtn'>Find a trip</button>
        <div className='findTripDiv'>
          <h3>Let's start by finding your trip:</h3>
          <div className='findTripInputsAndBtn'>
            <div className='confirmNum'>
              <label htmlFor="confirmNum">Confirmation number*</label>
              <input type="text" />
            </div>
            <div className='lastName'>
              <label htmlFor="lastName">Last name*</label>
              <input type="text" />
            </div>         
            <button>Search</button>
          </div>     
        </div>     
      </div>
    </div>
    </div>
  )
}

export default HelpCenter
