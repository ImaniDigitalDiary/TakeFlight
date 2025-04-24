import React from 'react'


// styling
import '../styling/navbar.css'
  // font awesome icons
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
  import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
  



// import { Heading } from '@chakra-ui/react'


function Navbar() {
  return (
   <div className='navbar'>
    <ul className='navLinks'>
      <li className='navLink'>Book <FontAwesomeIcon icon={faChevronDown} /></li>
      <li className='navLink'>My trips <FontAwesomeIcon icon={faChevronDown} /></li>
      <li className='navLink'>Travel info <FontAwesomeIcon icon={faChevronDown} /></li>
      <li className='navLink'>MileagePlus <FontAwesomeIcon icon={faChevronDown} /></li>
      <li className='navLink'>Deals <FontAwesomeIcon icon={faChevronDown} /></li>
      <li className='navLink'>Help <FontAwesomeIcon icon={faChevronRight} /></li>
    </ul>
    {/* <Heading>Title</Heading> */}
  
   </div>
    
  )
}

export default Navbar
