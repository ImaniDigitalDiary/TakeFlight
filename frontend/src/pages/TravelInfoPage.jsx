import React, {useState} from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'

// STYLING
import '../styling/travel-info.css'
    // FONT AWESOME ICONS
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faMobileScreen, faWheelchair } from '@fortawesome/free-solid-svg-icons'
    import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
    import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
    import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
    import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons'
    import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
    import { faInfo } from '@fortawesome/free-solid-svg-icons'
    import { faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons'
    import { faQrcode } from '@fortawesome/free-solid-svg-icons'


// IMAGES
import travelInfoImage from '../images/travel-info-image.png'

// individual compeonents for each button
const PlanATrip = () => (
        <>
        <div className="planATripMain">
            <div className="planATripHeadingDiv">
                <h2>Plan a trip</h2>
                <p>What you need to know before you get to the airport.</p>
            </div>
            {/* TAKE FLIGHT APP */}
            <div className="planATripCont">
                <div className="planATripIconDiv">
                    <FontAwesomeIcon icon={faMobileScreen}  className='planATripIcon fa-2x' />
                </div>
                <div className="planATripText">
                    <h3 className="planATripContHeader">Take Flight App</h3>
                    <p>The Take Flight app is the best way to plan, book and enjoy your next flight.</p>
                </div>
                <div className="planATripArrowDiv">
                    <FontAwesomeIcon icon={faArrowRight} className='planATripArrow fa-2x'/>
                </div>
            </div>
            {/* AIRCRAFT INFORMATION */}
            <div className="planATripCont">
                <div className="planATripIconDiv">
                    <FontAwesomeIcon icon={faMapLocationDot}  className='planATripIcon fa-2x' />
                </div>
                <div className="planATripText">
                    <h3 className="planATripContHeader">Aircraft informaiton</h3>
                    <p>Seat maps for every type of plane in our fleet.</p>
                </div>
                <div className="planATripArrowDiv">
                    <FontAwesomeIcon icon={faArrowRight} className='planATripArrow fa-2x'/>
                </div>
            </div>
            {/* OUR CABINS */}
            <div className="planATripCont">
                <div className="planATripIconDiv">
                    <FontAwesomeIcon icon={faChalkboardUser}  className='planATripIcon fa-2x' />
                </div>
                <div className="planATripText">
                    <h3 className="planATripContHeader">Our cabins</h3>
                    <p>Learn about our different onboard experiences and find the seat that's best for you.</p>
                </div>
                <div className="planATripArrowDiv">
                    <FontAwesomeIcon icon={faArrowRight} className='planATripArrow fa-2x'/>
                </div>
            </div>
            {/* INTERNATIONAL TRAVEL REQUIREMENTS */}
            <div className="planATripCont">
                <div className="planATripIconDiv">
                    <FontAwesomeIcon icon={faEarthAmericas}  className='planATripIcon fa-2x' />
                </div>
                <div className="planATripText">
                    <h3 className="planATripContHeader">International travel requirements</h3>
                    <p>Every country has its own entry requirements. Find out what documents you'll need to bring with you.</p>
                </div>
                <div className="planATripArrowDiv">
                    <FontAwesomeIcon icon={faArrowRight} className='planATripArrow fa-2x'/>
                </div>
            </div>
            {/* AIRPORT INFORMATION */}
            <div className="planATripCont">
                <div className="planATripIconDiv">
                    <FontAwesomeIcon icon={faInfo}  className='planATripIcon fa-2x' />
                </div>
                <div className="planATripText">
                    <h3 className="planATripContHeader">Airport information</h3>
                    <p>Learn about our airport check-in process, expedited security programs like TSA PreCheck and our TakeFlight Clubs.</p>
                </div>
                <div className="planATripArrowDiv">
                    <FontAwesomeIcon icon={faArrowRight} className='planATripArrow fa-2x'/>
                </div>
            </div>
            {/* TRAVELING WITH BAGS */}
            <div className="planATripCont">
                <div className="planATripIconDiv">
                    <FontAwesomeIcon icon={faSuitcaseRolling}  className='planATripIcon fa-2x' />
                </div>
                <div className="planATripText">
                    <h3 className="planATripContHeader">Traveling with bags</h3>
                    <p>Our rules for checked and carry-on bags, special items and fees.</p>
                </div>
                <div className="planATripArrowDiv">
                    <FontAwesomeIcon icon={faArrowRight} className='planATripArrow fa-2x'/>
                </div>
            </div>
            {/* TSA SECURITY RULES */}
            <div className="planATripCont">
                <div className="planATripIconDiv">
                    <FontAwesomeIcon icon={faQrcode}  className='planATripIcon fa-2x' />
                </div>
                <div className="planATripText">
                    <h3 className="planATripContHeader">TSA security rules</h3>
                    <p>Information on TSA screening and tips on how to get through security faster.</p>
                </div>
                <div className="planATripArrowDiv">
                    <FontAwesomeIcon icon={faArrowRight} className='planATripArrow fa-2x'/>
                </div>
            </div>
        </div>    
        </>
    )

    const AccAndAssist = () => (
        <>
        <div className="accAndAssistMain">
            <div className="accAndAssistHeadingDiv">
                <h2>Accessibility and assistance</h2>
                <p>Our accessible travel policies and procedures.</p>
            </div>
            {/* MOBILITY AND WHEELCHAIR ASSISTANCE*/}
            <div className="accAndAssistCont">
                <div className="accAndAssistIconDiv">
                    <FontAwesomeIcon icon={faWheelchair}  className='accAndAssistIcon fa-2x' />
                </div>
                <div className="accAndAssistText">
                    <h3 className="accAndAssistContHeader">Mobility and wheelchair assistance</h3>
                    <p>Whether you plan to travel with your own device, or need to request mobility services, we're here to help you.</p>
                </div>
                <div className="accAndAssistArrowDiv">
                    <FontAwesomeIcon icon={faArrowRight} className='accAndAssistArrow fa-2x'/>
                </div>
            </div>
        </div> 
        </>
    )

    const contentMap = {
        'Plan a trip': <PlanATrip />,
        'Accessibility and assistance': <AccAndAssist />
    }


function TravelInfoPage() {
    const [selectedTopic, setSelectedTopic] = useState('Plan a trip')
  return (
    <>
    <Navbar />
    <div className='travelInfoImageDiv'>
      <img className='travelInfoImage' src={travelInfoImage} alt="Travel Info Image of airplane in the sky" />
    </div>

    <div className="guidelines">
        <h1 className="guidelinesHeader">Travel information and guidelines</h1>
        <p className="guidelinesHeaderPara">Use the information on this page to help you through your next trip.</p>
    </div>


    {/* TRAVEL INFO ELEMENTS FOR CONTENT MAP */}
    <div className="helpMainDiv">
            <div className='helpMainCont'>
                <h1>What can we help you with today?</h1>
            
            
            <div className='mainRightDiv' 
                style={{ 
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                {/* Sidebar with buttons */}
                    <div className='topicBtnDiv' 
                        style={{ 
                            width: "260px", 
                            borderRight: "1px solid #ddd", 
                            padding: "1rem", 
                            }}>
                            {Object.keys(contentMap).map((topic) => (
                            <button
                                className='topicBtn'
                                key={topic}               
                                onClick={() => setSelectedTopic(topic)}
                                style={{
                                textAlign: "left",
                                cursor: "pointer",
                                }}
                            >
    
                                {topic}
                                {/* font awesome icon for all topics for the right side of topics */}
                                <FontAwesomeIcon icon={faChevronRight}  className='faChevronRight'/>
                            </button>
                            ))}
                    </div>
                
    
                {/* Content area */}
                <div className='contentDiv'>
                    {contentMap[selectedTopic]}
                </div>
            </div>
            </div>
        </div>
    
    </>
  )
}

export default TravelInfoPage
