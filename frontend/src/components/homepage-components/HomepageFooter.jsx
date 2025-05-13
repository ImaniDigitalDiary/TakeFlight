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
   


function HomepageFooter() {
  return (
    <div className='homeFooterMain'>
        <div className='homeFooterDivs'>
            
                <button>Search</button>
                <p>English - United States $ | Espaol</p>

                <div className='socialIcons'>
                    <button><FontAwesomeIcon icon={faTiktok} /></button>
                    <button><FontAwesomeIcon icon={faFacebook} /></button>
                    <button><FontAwesomeIcon icon={faXTwitter} /></button>
                    <button><FontAwesomeIcon icon={faYoutube} /></button>
                    <button><FontAwesomeIcon icon={faInstagram} /></button>
                    <button><FontAwesomeIcon icon={faLinkedinIn} /></button>
                </div>
       
            
        </div>
      
    </div>
  )
}

export default HomepageFooter
