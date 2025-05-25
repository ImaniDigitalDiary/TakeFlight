import React from 'react'
import { Link } from 'react-router-dom'

// logo
import logo from '../images/take-flight-logo.png'


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
    <div className="navbarMainDiv">
      <div className='navbar'>
    
      <ul className='navLinks1'>
        <Link className='navLink1' to={'/home'}><img src={logo} className='logo'/></Link>
        <Link className='navLink1' to={'/book'}>Book <FontAwesomeIcon icon={faChevronDown} /></Link>
        <li className='navLink1'>My trips <FontAwesomeIcon icon={faChevronDown} /></li>
        <li className='navLink1'>Travel info <FontAwesomeIcon icon={faChevronDown} /></li>
        <li className='navLink1'>MileagePlus <FontAwesomeIcon icon={faChevronDown} /></li>
        <li className='navLink1'>Deals <FontAwesomeIcon icon={faChevronDown} /></li>
        <Link className='navLink1' to={'/help-center'}>Help <FontAwesomeIcon icon={faChevronRight} /></Link>
      </ul>
    
      <ul className='navLinks2'>
        <li className='navLink2 globe'><FontAwesomeIcon icon={faGlobe} /> English-US$</li>
        <li className='navLink2 link2Icon'><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
        <li className='navLink2 link2Icon'><FontAwesomeIcon icon={faUserLarge} /></li>
        <li className='navLink2 link2Icon'><FontAwesomeIcon icon={faCartShopping} /></li>
      </ul>
    
    </div>
    </div>
   
    
  )
}

export default Navbar
