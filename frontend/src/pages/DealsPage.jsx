import React from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'

function DealsPage() {
  return (
    <div>
        <Navbar />
        <div className="dealsMain">
            <h1>Travel deals</h1>
            <p>Enjoy discounts on over 4,500 flights to 300+ destinations.
                Some Take Flight deals also let you earn extra miles.
            </p>
            <div className="dealsOfferLinks">
                <div className="specialOffers">
                    <a href="#">Special flight offers</a>
                </div>
                <div className="otherOffers">
                    <a href="#">Other offers</a>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default DealsPage
