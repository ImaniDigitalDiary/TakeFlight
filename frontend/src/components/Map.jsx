import React, { useEffect, useState } from 'react'

// STYLING
import '../styling/map.css'

function Map() {
    const [flights, setFlights] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const response = await fetch(`https://corsproxy.io/?https://api.aviationstack.com/v1/flights?access_key=177b917171501ee07ed8a6d238faafad`)
                const data = await response.json()
                console.log(data)

                if (data && data.data) {
                    setFlights(data.data.slice(0,10)) // show 1st 10 flights
                }
            } catch (error) {
                console.error('Error fetching flight data', error)
            } finally {
                setLoading(false)
            }
        }
        fetchFlights()
    }, [])

    return (
    <div className='mapCont'>
      <h3>Live Flights and Destinations</h3>

      {loading ? (
        <p>Loading flights...</p>
      ) : (
        <>
        {flights.map((flight, index) => (
            <div key={index} style={{ marginBottom: '1rem'}}>
                Flights from <strong>{flight.departure?.airport}</strong>
                to <strong>{flight.arrival?.airport}</strong>
                <br />
                Status: {flight.flight_status}
            </div>
        ))}
        </>
      )}
    </div>
  )
}

export default Map
