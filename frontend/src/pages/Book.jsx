import React from 'react'

// STYLING
import '../styling/book-page.css'

function Book() {
  return (
    <div className='bookFlightPageMainDiv'>
        <div className="bookFlightPageMainDiv1">
            <h1>Book a flight</h1>
            <div>
                <a href="signIn">Sign in</a> to your MileagePlus account for even faster checkout.
            </div>
        </div>
        <div className="bookFlightPageMainDiv2">
            <h6>Learn more:</h6>
            <ul>
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
  )
}

export default Book
