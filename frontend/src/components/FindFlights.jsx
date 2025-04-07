import React from 'react'

// bootstrap
import { Form, Container, Navbar, Nav } from 'react-bootstrap'


function FindFlights() {
  return (
    <div className='findFlights'> 
      <Form>
        <Form.Group className='mb-3'>
          <Navbar  bg='dark'  data-bs-theme='dark' className="bg-body-tertiary">
      <Container>
        <Nav className="me-auto">
            <Nav.Link href="#book">Book</Nav.Link>
            <Nav.Link href="#flight-status">Flight Status</Nav.Link>
            <Nav.Link href="#check-in">Check-in</Nav.Link>
            <Nav.Link href="#my-trips">My Trips</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
        </Form.Group>
      </Form>
    </div>
  )
}

export default FindFlights
