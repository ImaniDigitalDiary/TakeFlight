import React from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'

// STYLING
import '../styling/book-page.css'
    // FONT AWESOME ICONS
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'


function Book() {
  return (
    <div className='bookPage'>
        <Navbar />
        <div className='bookFlightPageMainDiv'>
            <div className="bookFlightPageMainDiv1">
                <h1>Book a flight</h1>
                <div className='signInDiv'>
                    <FontAwesomeIcon icon={faCircleInfo} className='faCircleInfo'/>
                    <a href="signIn" className='signIn'>Sign in</a> to your MileagePlus account for even faster checkout.
                </div>

                <div className="radioBtnsMain">
                    
                    <div className="radioBtnsMainDiv1">
                        <h6>Show trip selection</h6>
                        <div className="radioBtnsDiv1">
                            <div className="tripSelectRadioBtns">
                                <input type="radio"/>
                                <label htmlFor="">Flight only</label>
                            </div>
                            <div className="tripSelectRadioBtns">
                                <input type="radio"/>
                                <label htmlFor="">Flight + hotel</label>
                            </div>
                            <div className="tripSelectRadioBtns">
                                <input type="radio"/>
                                <label htmlFor="">Flight + hotel + cars</label>
                            </div>
                            <div className="tripSelectRadioBtns">
                                <input type="radio"/>
                                <label htmlFor="">Flight + car</label>
                            </div>
                        </div>
                    </div>

                    <div className="radioBtnsMainDiv2">
                        <h6>Show price in</h6>
                        <div className="radioBtnsDiv2">
                            <div className="tripSelectRadioBtns">
                                <input type="radio"/>
                                <label htmlFor="">Money</label>
                            </div>
                            <div className="tripSelectRadioBtns">
                                <input type="radio"/>
                                <label htmlFor="">Miles</label>
                            </div>
                        </div>
                    </div>

                    <div className="bookPageFormMain">
                        <div className="bookPageFormLinksDiv">
                            <div className="bookPageFormLinks">
                                Roundtrip
                            </div>
                            <div className="bookPageFormLinks">
                                One-way
                            </div>
                            <div className="bookPageFormLinks">
                                Multi-city
                            </div>
                        </div>

                        <div className="bookPageFormDiv1">
                            <div className="bookPageFromInputDiv1 bookPageFormInputDiv1">
                                <label htmlFor="">From</label>
                                <input className='bookPageFormInput' type="text" placeholder='Cleveland, OH, US (CLE)'/>
                                <div className='bookPageFormCheckbox'>
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                        Search nearby airports
                                    </div>
                                    
                                </div> 
                            </div>

                            <div className="bookPageToInputDiv1 bookPageFormInputDiv1">
                                <label htmlFor="">To</label>
                                <input className='bookPageFormInput' type="text" placeholder='City or airport'/>

                                <div className='bookPageFormCheckbox'>
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                        Search nearby airports
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                        Nonstop only
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bookPageFormDiv2">
                            <div className="bookPageTravInputDiv2 bookPageFormInputDiv2">
                                <label htmlFor="">Select travelers</label>
                                <input className='bookPageFormInput' type="text" placeholder='3 Travelers'/>
                            </div>
                            <div className="bookPageDatesInputDiv2 bookPageFormInputDiv2">
                                <label htmlFor="">Select dates</label>
                                <input className='bookPageFormInput' type="text" placeholder='3 Travelers'/>

                                <div className='bookPageFormCheckbox'>
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                        Flexible dates
                                    </div>
                                </div>
                            </div>


                        </div>

                        
                    </div>


                    
                    

                    
                </div>
            </div>

            <div className="bookFlightPageMainDiv2">
                <ul>
                    <h6>Learn more:</h6>
                    <li>Unaccompanied minors</li>
                    <li>Traveling with children</li>
                    <li>Learn about fare classes</li>
                    <li>Request a TakeFlight Groups quore for 10+</li>
                    <li>Pets in cabin</li>
                    <li>Upgrades overview</li>
                    <li>Redeeming a future flight credit</li>
                    <li>Redeeming a certificate</li>
                    <li>Earning miles</li>
                </ul>
            </div>
        </div>

    </div>
    
  )
}

export default Book
