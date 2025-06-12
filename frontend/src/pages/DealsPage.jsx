import React from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'

// IMAGES
import chicagoImg from '../images/deals-images/chicago.jpg'
import houstonImg from '../images/deals-images/houston.jpg'
import newYorkImg from '../images/deals-images/new-york.jpg'
import sanFranImg from '../images/deals-images/sanfran.jpg'
import laImg from '../images/deals-images/los-angeles.jpg'
import denverImg from '../images/deals-images/denver.jpg'

// STYLING
import '../styling/deals.css'

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
                        <img src={chicagoImg} alt="Chicago" className='dealsImg' />
                        <a href="#">Flights from Chicago</a>
                    </div>
                    <div className="houston">
                        <img src={houstonImg} alt="Houston" className="dealsImg" />
                        <a href="#">Flights from Houston</a>
                    </div>
                    <div className="newyork">
                        <img src={newYorkImg} alt="New York City" className="dealsImg" />
                        <a href="#">Flights from New York City</a>
                    </div>
                    <div className="sanfran">
                        <img src={sanFranImg} alt="San Francisco" className="dealsImg" />
                        <a href="#">Flights from San Francisco</a>
                    </div>
                    <div className="la">
                        <img src={laImg} alt="Los Angeles" className="dealsImg" />
                        <a href="#">Flights from Los Angeles</a>
                    </div>
                    <div className="denver">
                        <img src={denverImg} alt="Denver" className="dealsImg" />
                        <a href="#">Flights from Denver</a>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default DealsPage
