import React from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'

// STYLING
import '../styling/my-trips.css'
    // FONT AWESOME ICONS
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'

function MyTripsPage() {
  return (
    <div className='myTripsPage'>
        <Navbar />
        <div className="myTripsPageMainDiv">
            <div className="myTripsDiv1">
            <div className="myTripsDiv1Text">
                <h1>My trips</h1>
                <div>Looking for a receipt? <a href="#">Search receipts</a></div>
            </div>
        </div>


        <div className='myTripsDiv2'>
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




        </div>
    </div>
  )
}

export default MyTripsPage
