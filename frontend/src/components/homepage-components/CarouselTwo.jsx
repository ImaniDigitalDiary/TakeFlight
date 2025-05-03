import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

// STYLING
import 'bootstrap/dist/css/bootstrap.min.css'

// COMPONENTS
import './homepage-styling/carousel-two.css'

// IMAGES
import image6 from './carousel-images/image6.jpg'
import image7 from './carousel-images/image7.jpg'
import image8 from './carousel-images/image8.jpg'

function CarouselTwo() {
    const [index, setIndex] = useState(0)

    // handleSelect - update the index to the slide number that the use clicks to
    const handleSelect = (clickedIndex) => {
        setIndex(clickedIndex)
    }

    // move backward one slide
    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1))
    }
  return (
    <div>
      <Carousel indicators={false} controls={true} interval={null} prevIcon={true} nextIcon={true}>
        <Carousel.Item>
            <div className='image6TextDiv'>
                <div className='carouselText'>
                    <h1>Travel inspiration with you in mind</h1> 
                    <p>Enjoy curated itineraries and hidden gems from Hemispheres.</p> 
                    <button className='image6Btn'>Get inspired</button>
                </div>
                 <div className='image6Div'>
                    <img className='image6' src={image6} alt="Travel" />
                </div>
            </div> 
        </Carousel.Item>
        <Carousel.Item>
            <div className='image7TextDiv'>
                <div className='carouselText'>
                    <h1>Travel assistance that fits in your hand</h1> 
                    <p>Do the smart thing with your smart phone. Use our app to check-in for your
                        flight, view your boarding pass, track bags, check your flight status and binge TV shows and movies onboard.
                    </p> 
                    <button className='image7Btn'>Download the app</button>
                </div>
                 <div className='image7Div'>
                    <img className='image7' src={image7} alt="Talking on phone" />
                </div>
            </div> 
        </Carousel.Item>
        <Carousel.Item>
            <div className='image8TextDiv'>
                <div className='carouselText'>
                    <h1>Explore modern-day Rome</h1> 
                    <p>The Colosseum, the Pantheon, the Forum Romanum - visiting ancient Rome is fun.
                        Pasta making, wine tasting, big bus tours - visiting modern Rome is better.
                    </p> 
                    <button className='image8Btn'>Book now</button>
                </div>
                 <div className='image8Div'>
                    <img className='image8' src={image8} alt="Travel" />
                </div>
            </div> 
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselTwo
