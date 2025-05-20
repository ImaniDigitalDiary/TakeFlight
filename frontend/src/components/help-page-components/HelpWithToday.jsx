import React, {useState} from 'react'

// individual components for each button

// ACCESSIBILITY AND ASSISTANCE //
const AccessibilityAndAssistance = () => (
    <>
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
    
    </>
)

    // ****Map string keys to JSX components****
    const contentMap = {
        'Accessibility and Assistance': <AccessibilityAndAssistance />,
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
