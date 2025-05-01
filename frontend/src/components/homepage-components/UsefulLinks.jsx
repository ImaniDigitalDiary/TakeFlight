import React from 'react'

// FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
function UsefulLinks() {
  return (
    <div>
      <h1>Useful links for you</h1>
      <div className='usfulLinksDiv'>
        <div className='usefulLinkDiv'>
            <div className='usefulLinkText'>
                <h2>Plan your trip</h2>
                <p>Find a destination and any entry requirements.</p>
            </div> 
            <FontAwesomeIcon className='faArrowRight' icon={faArrowRight} />
        </div>
      </div>
    </div>
  )
}

export default UsefulLinks
