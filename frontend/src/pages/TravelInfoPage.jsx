import React, {useState} from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'

// STYLING
import '../styling/travel-info.css'
    // FONT AWESOME ICONS
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faMobileScreen } from '@fortawesome/free-solid-svg-icons'
    import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
    import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

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
            <div className="planATripCont">
                <div className="planATripIconDiv">
                    <FontAwesomeIcon icon={faMobileScreen}  className='planATripIcon fa-2x' />
                </div>
                <div className="planATripText">
                    <h3 className="planATripContHeader">Take Flight App</h3>
                    <p>The Take Flight app is the best way to plan, book and enjoy your next flight.</p>
                </div>
                <div className="planATripArrow">
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </div>    
        </>
    )

    const contentMap = {
        'Plan a trip': <PlanATrip />
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
