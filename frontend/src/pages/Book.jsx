import React from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'

// STYLING
import '../styling/book-page.css'
    // FONT AWESOME ICONS
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'


function Book() {
  return (
    <div className='bookPage'>
        <Navbar />
        <div className='bookFlightPageMainDiv'>
            <div className="bookFlightPageMainDiv1">
                <h1>Book a flight</h1>
                <div className='signInDiv'>
                    <FontAwesomeIcon icon={faCircleInfo} className='faCircleInfo'/>
                    <a href="signIn" className='signIn'>Sign in</a> to your MileagePlus account for even faster checkout.
                </div>
            </div>

            <div className="bookFlightPageMainDiv2">
                <ul>
                    <h6>Learn more:</h6>
                    <li>Unaccompanied minors</li>
                    <li>Traveling with children</li>
                    <li>Learn about fare classes</li>
                    <li>Request a TakeFlight Groups quore for 10+</li>
                    <li>Pets in cabin</li>
                    <li>Upgrades overview</li>
                    <li>Redeeming a future flight credit</li>
                    <li>Redeeming a certificate</li>
                    <li>Earning miles</li>
                </ul>
            </div>
        
        </div>

    </div>
    
  )
}

export default Book
