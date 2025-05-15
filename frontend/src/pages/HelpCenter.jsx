import React from 'react'

function HelpCenter() {
  return (
    <div className='helpCenterPageMainDiv'>
      
      <div className='helpCenterDiv1'>
        <h1>Help Center</h1>
        <p>Find or select a flight for help with with a trip.</p>
        <ul>
          <li>Looking for something else?</li>
        </ul>
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
  )
}

export default HelpCenter
