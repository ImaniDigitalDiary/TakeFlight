import React, {useState} from 'react'

// individual components for each button

// ACCESSIBILITY AND ASSISTANCE //
const AccessibilityAndAssistance = () => (
    <>
    <h3>Accessibility and assistance</h3>
    <p>What to know when you're traveling with a wheelchair, a service dog or need extra assisstance with your trip.</p>
    <ul>
        <li>Wheelchair Assistance</li>
        <p>How to request and info on checking yours</p>

        <li>Accessible travel</li>
        <p>See how we help travelers who need extra assistance</p>

        <li>Service dogs</li>
        <p>Guidelines, policies, how to add a service dog to your profile</p>

        <li>Social story</li>
        <p>View every step of the flying process so you know what to expect</p>
        
        <li>Accessibility</li>
        <p>See our policy and commitment to accessibility</p>

        <li>Accessible seating</li>
        <p>Request accessible seats for travelers with disabilities</p>

        <li>Oxygen</li>
        <p>What to do if you need to bring oxygen on board</p>
    </ul>
    </>
)

const Baggage = () => (
    <>
    <h3>Baggage</h3>
    <p>Answers to your questions about checking, carrying on, paying for and tracking your bags.</p>
    <ul>
        <li>Baggage fee calculator</li>
        <p>See what it will cost to check your bags</p>

        <li>Carry-on bags</li>
        <p>See which bags can join you on board</p>

        <li>Checked bags</li>
        <p>Learn more about our checked bag policies</p>

        <li>Damaged or delayed bags</li>
        <p>Submit a claim or trace baggage</p>

        <li>Claim status</li>
        <p>See the status of a baggage claim you filed</p>

        <li>Lost items</li>
        <p>How to report and follow up on missing items</p>

        <li>Bag info</li>
        <p>Find out more about our bag policies</p>
    </ul>
    </>
)

const Booking = () => (
    <>
    <h3>Booking a trip</h3>
    <p>Find out everything you need to know, from booking a flight to using travel credits.</p>

    <ul>
        <li>Book a flight</li>
        <p>Let's get started with a new trip</p>

        <li>Flexible booking options</li>
        <p>Answers to common questions about booking flights</p>

        <li>Sustainable travel</li>
        <p>Learn about Take Flight's carbon offset program and how you can participate</p>

        <li>Insurance</li>
        <p>Learn more about tracel insurance</p>

        <li>Travel credits</li>
        <p>Learn more about the different types and how to use them</p>

        <li>FareLock</li>
        <p>See how to reserve your trip now and pay later</p>
    </ul>
    </>
)

const ChildrenAndInfants = () => (
    <>
    <h3>Children and infants</h3>
    <p>Tips and information if you'll be traveling with little ones.</p>

    <ul>
        <li>Traveling with children</li>
        <p>Tips for travel with little ones</p>

        <li>Traveling while pregnant</li>
        <p>Safe travel tips with a baby on the way</p>

        <li>Minors traveling alone</li>
        <p>Policies and procedures for young children traveling on their own</p>

        <li>Baggage for infants</li>
        <p>What you can bring on board for free and what you need to check</p>
    </ul>
    </>
)

const CustomerCare = () => (
    <>
    <h3>Customer care</h3>
    <p>Share your feedback or get in touch.</p>

    <ul>
        <li>Customer care</li>
        <br />
        <li>Reimbursements</li>
        <p>Request reimbursements for expenses caused by delayed or canceled flights</p>
    </ul>
    </>
)

const DigitalTrustCenter = () => (
    <>
    <h3>Digital Trust Center</h3>
    <p>Learn about Take Flight's commitment to the transparent use of your data and your data privacy rights.</p>

    <ul>
        <li>How does Take Flight use and protect my personal data?</li>
        <p>Understand the types of data collected, how it is used and where to manage your data preferences</p>

        <li>Privacy Policy</li>
        <p>Learn more about our legal policies around data privacy</p>
    </ul>
    </>
)

const HelpWithTrips = () => (
    <>
    <h3>Help with trips</h3>
    <p>See how to check in for flights, watch your flight's status, register for TSA PreCheck and more.</p>
    
    <ul>
        <li>TSA PreCheck</li>
        <p>Get through security faster with a Known Traveler Numbers</p>

        <li>Global Entry</li>
        <p>Make international travel easier</p>

        <li>Changing or canceling a trip</li>
        <p>What to do when your plans change</p>

        <li>Missed, delayed and canceled flights</li>
        <p>What to do if there's a change to your flight's schedule</p>

        <li>Flight status</li>
        <p>Check your flight time, standby list position and more</p>

        <li>Check-in</li>
        <p>What you need, and when and how to do it</p>

        <li>Travel alerts</li>
        <p>Check for any travel-related alerts or waivers</p>

        <li>What to expect</li>
        <p>Learn what to expect when you get to the airport</p>

        <li>COVID-19 guidelines</li>
        <p>Find the latest travel policies and restrictions</p>
    </ul>
    </>
)


    // ****Map string keys to JSX components****
    const contentMap = {
        'Accessibility and Assistance': <AccessibilityAndAssistance />,
        'Baggage': <Baggage />,
        'Booking': <Booking />,
        'Children and Infants': <ChildrenAndInfants />,
        'Customer Care': <CustomerCare />,
        'Digital Trust Center': <DigitalTrustCenter />,
        'Help With Trips': <HelpWithTrips />,
    }

const HelpWithToday = () => {
  const [selectedTopic, setSelectedTopic] = useState("Wheelchair assistance");

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Sidebar with buttons */}
      <div style={{ width: "260px", borderRight: "1px solid #ddd", padding: "1rem", background: "#f9f9f9" }}>
        {Object.keys(contentMap).map((topic) => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginBottom: "8px",
              backgroundColor: selectedTopic === topic ? "#e0e0e0" : "#fff",
              border: "1px solid #ccc",
              borderRadius: "5px",
              textAlign: "left",
              cursor: "pointer",
              fontWeight: selectedTopic === topic ? "bold" : "normal"
            }}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div style={{ flex: 1, padding: "2rem" }}>
        {contentMap[selectedTopic]}
      </div>
    </div>
  );
};


export default HelpWithToday
