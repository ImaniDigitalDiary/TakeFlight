import React from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'

// IMAGES
import chicagoImg from '../images/deals-images/chicago.jpg'
import houstonImg from '../images/deals-images/houston.jpg'
import newYorkImg from '../images/deals-images/new-york.jpg'
import laImg from '../images/deals-images/los-angeles.jpg'
import denverImg from '../images/deals-images/denver.jpg'

function DealsPage() {
  return (
    <div>
        <Navbar />
        <div className="dealsMain">
            <h1>Travel deals</h1>
            <p>Enjoy discounts on over 4,500 flights to 300+ destinations.
                Some Take Flight deals also let you earn extra miles.
            </p>
            <div className="dealsOfferLinksDiv">
                <div className="dealsOfferLinks">
                <div className="specialOffers">
                    <a href="#">Special flight offers</a>
                </div>
                <div className="otherOffers">
                    <a href="#">Other offers</a>
                </div>
            </div>
            <h3>Special flight offers</h3>
            <p>You can explore our current flight offers and promotions using our <span><a href="#">search tool</a></span>.</p>
            </div>

            <div className="ongoingDealsDiv">
                <h5>On-going deals</h5>
                {/* IMGES */}
                <div className="ongoingDealsImages">
                    <div className="chicago">
                        <img src={chicagoImg} alt="chicago" />
                        <a className='dealsImg' href="#">Flights from Chicago</a>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default DealsPage
