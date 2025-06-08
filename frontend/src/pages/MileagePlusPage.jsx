import React from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'


// STYLING
import '../styling/mile-plus.css'
// FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

// IMAGES
import planeTicket from '../images/mile-plus-images/plane-ticket.svg'
import calendar from '../images/mile-plus-images/calendar.svg'
import plane from '../images/mile-plus-images/plane.svg'
import ticket from '../images/mile-plus-images/ticket.svg'

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
            <div className="memberTextAndIcon">
                <FontAwesomeIcon icon={faBookmark} />
                <h3>Already a member?</h3>
            </div>
            <button className='memberBtn'>Sign in</button>
        </div>

        <div className="memberImagesDiv">
            <div className="memberImgDiv">
                <img className='memberImg' src={planeTicket} alt="ticket illustration" />
                <h6>Earn and redeem miles</h6>
            </div>
            <div className="memberImgDiv">
                <img className='memberImg' src={calendar} alt="calendar illustration" />
                <h6>Miles never expire</h6>
            </div>
            <div className="memberImgDiv">
                <img className='memberImg' src={plane} alt="window illustration" />
                <h6>Easily save & manage trips</h6>
            </div>
            <div className="memberImgDiv">
                <img className='memberImg' src={ticket} alt="window illustration" />
                <h6>Quicker check-in</h6>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default MileagePlusPage
