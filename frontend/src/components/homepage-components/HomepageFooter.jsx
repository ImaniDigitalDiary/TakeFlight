import React from 'react'


// STYLING
import './homepage-styling/homepage-footer.css'
    // FONT AWESOME ICONS
   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
   import { faTiktok } from '@fortawesome/free-brands-svg-icons'
   import {faFacebook} from '@fortawesome/free-brands-svg-icons'
   import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
   import { faYoutube } from '@fortawesome/free-brands-svg-icons'
   import { faInstagram } from '@fortawesome/free-brands-svg-icons'
   import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
   import { faGlobe } from '@fortawesome/free-solid-svg-icons'
   


function HomepageFooter() {
  return (
    <div className='homeFooterMain'>
        <div className='homeFooterDivs'>
            
                <button>Search</button>
                <h6><FontAwesomeIcon icon={faGlobe} className='faGlobe fa-lg' />English - United States $ | Espaol</h6>

                <div className='socialIcons'>
                    <FontAwesomeIcon icon={faTiktok} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faXTwitter} />
                    <FontAwesomeIcon icon={faYoutube} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
       
            
        </div>
      
    </div>
  )
}

export default HomepageFooter
