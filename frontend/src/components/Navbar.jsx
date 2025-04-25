import React from 'react'
import { Link } from 'react-router-dom'


// styling
import '../styling/navbar.css'
  // font awesome icons
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
  import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
  import { faGlobe } from '@fortawesome/free-solid-svg-icons'
  import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
  import { faUserLarge } from '@fortawesome/free-solid-svg-icons'
  import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

  



// import { Heading } from '@chakra-ui/react'


function Navbar() {
  return (
   <div className='navbar'>
    
    <ul className='navLinks1'>
      <Link className='navLink1' to={'/home'}>HomeLogo</Link>
      <li className='navLink1'>Book <FontAwesomeIcon icon={faChevronDown} /></li>
      <li className='navLink1'>My trips <FontAwesomeIcon icon={faChevronDown} /></li>
      <li className='navLink1'>Travel info <FontAwesomeIcon icon={faChevronDown} /></li>
      <li className='navLink1'>MileagePlus <FontAwesomeIcon icon={faChevronDown} /></li>
      <li className='navLink1'>Deals <FontAwesomeIcon icon={faChevronDown} /></li>
      <li className='navLink1'>Help <FontAwesomeIcon icon={faChevronRight} /></li>
    </ul>
    
    <ul className='navLinks2'>
      <li className='navLink2 globe'><FontAwesomeIcon icon={faGlobe} /> English-US$</li>
      <li className='navLink2 link2Icon'><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
      <li className='navLink2 link2Icon'><FontAwesomeIcon icon={faUserLarge} /></li>
      <li className='navLink2 link2Icon'><FontAwesomeIcon icon={faCartShopping} /></li>
    </ul>
  
   </div>
    
  )
}

export default Navbar
