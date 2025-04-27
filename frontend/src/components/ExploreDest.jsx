import React from 'react'

// STYLES 
import '../styling/map.css'

// COMONENTS
import Map from './Map'

function ExploreDest() {
  return (
    <>
    <div>
      <h1 className='exploreH1'>Explore destinations</h1>
      <h2 className='exploreH2'>Not sure where to go? Use our interactive map to find flights to great destinations.</h2>
    </div>
    <Map />
    <div className='exploreNote'>
      *The prices shown are roundtrip fares and have been available within the last 48hours. 
      Additional baggage fees may apply. Fare prices in miles will include additional taxes and fees.
    </div>
    </>
  )
}

export default ExploreDest

