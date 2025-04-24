import React from 'react'


// styling
import '../styling/navbar.css'
  // font awesome icons
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  



// import { Heading } from '@chakra-ui/react'


function Navbar() {
  return (
   <div className='navbar'>
    <ul className='navLinks'>
      <li className='navLink'>Book</li>
      <li className='navLink'>My trips</li>
      <li className='navLink'>Travel info</li>
      <li className='navLink'>MileagePlus</li>
      <li className='navLink'>Deals</li>
      <li className='navLink'>Help</li>
    </ul>
    {/* <Heading>Title</Heading> */}
  
   </div>
    
  )
}

export default Navbar
