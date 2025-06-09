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

        <div className="aboutYourselfDiv">
            <h3>Tell us about yourself</h3>
            <div className="aboutYourselfPara">
                <p>To start, we need to know more about you. We'll use this information to confirm your identity at the end of the sign-up process.            </p> 
                <p>All fields are required unless indicated otherwise.</p>
            </div>
            
            <hr />

            {/* CONTACT DIV */}
            <div className="contactDiv">
                <h4>1. Contact information</h4>
                <div className="contactInputDiv">
                    <label htmlFor="email">
                        Email address
                        <input className='contactInput' type="text" />
                    </label>

                    <label htmlFor="phoneNumber">
                        Phone number
                        <input className='contactInput' type='number' />
                    </label>
                    
                </div>
            

            {/* checkboxes */}
            <div className="contactCheckboxesDiv">
                <label htmlFor="">
                    <input className='contactCheckbox' type="checkbox" name="" id="" />
                    I would like to receive MileagePlus marketing emails.
                </label>
                <label htmlFor="">
                    <input className='contactCheckbox'  type="checkbox" name="" id="" />
                    Send me updates on my flights when I travel.
                </label>
                    <p>Selecting 'Send me updates on my flights when I tavel' indicates that you consent to receiving automated
                        text and/or email messages concerning flight status updates or notifications. Message and data rates may apply.
                    </p>
            </div>
        </div>

        <hr />

        <div className="personalInfoDiv">
            <h4>2. Personal information</h4>
            <p>Your name, date of birth and gender must match the government-issued ID you use to travel.</p>
            <div className="peronsalInfoInputs">
                <label htmlFor="">
                    Title (optional)
                    <select name ="" id="">
                        <option value="">Select a title</option>
                        <option value="">Dr.</option>
                        <option value="">Prof.</option>
                        <option value="">Rev.</option>
                        <option value="">Miss</option>
                        <option value="">Mr.</option>
                        <option value="">Mrs.</option>
                        <option value="">Sir</option>
                        <option value="">Sister</option>
                        <option value="">Not Selected</option> 
                    </select>
                </label>
            </div>
        </div>
             
            
        </div>
      </div>
    </div>
  )
}

export default MileagePlusPage
