import React from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'

// FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

function MileagePlusPage() {
  return (
    <div>
        <Navbar />
      <div className="milePlusMain">
        <div className="milePlusHeadText">
            <h1>Create account</h1>
            <p>Start your MileagePlus adventure today. Our loyalty program is free to join and the miles you earn 
                will never expire. We reward you travel and regular activities, so you can earn miles every day of the year.
            </p>
        </div>
        <div className="memberDiv">
            <FontAwesomeIcon icon={faBookmark} />
            <h3>Already a member?</h3>
            <button>Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default MileagePlusPage
