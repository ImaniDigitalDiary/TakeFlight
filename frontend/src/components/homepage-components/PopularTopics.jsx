import React from 'react'


// STYLING
import './homepage-styling/popular-topics.css'
// FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function PopularTopics() {
  return (
    <>
    <div className='searchTopicsWrapper'>
      <h1>Popular topics</h1>
      <div className='searchTopicsInputDiv'>
        <input type="search" className='searchTopics' name='searchTopics' placeholder='Search Take Flight' className='searchTopics'/>
        <FontAwesomeIcon icon={faMagnifyingGlass}  className='searchIcon fa-2xl'/>
      </div>
      
    </div>
    <ul>
        <li>Wi-Fi</li>
        <li>Change flight</li>
        <li>United Club</li>
        <li>Traveling with pets</li>
        <li>MileagePlus</li>
        <li>Baggage</li>
        <li>Refund</li>
        <li>Help Center</li>
    </ul>
    </>
  )
}

export default PopularTopics
