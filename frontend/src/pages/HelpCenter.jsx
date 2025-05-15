import React from 'react'
import Navbar from '../components/Navbar'

// STYLING
import '../styling/help-center.css'

function HelpCenter() {
  return (
    <>
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
        <h2>Which trip do you need help with?</h2>
        <div>
          <h4>Sign in to MileagePlus</h4>
          <p>We can use your account information to find your trips.</p>
          <button className='signInBtn'>Sign in</button>
          <button className='joinNowBtn'>Join now</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default HelpCenter
