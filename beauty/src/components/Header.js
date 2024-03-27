import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const Header = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#FFFAFA', height: '85px'}}>
      <div className="d-flex justify-content-around w-50 mx-auto">
        <Nav.Link href="#link1" className="text-center" style={{ fontFamily: 'Baskerville'}}>
          <Button variant="outline-tertiary">Shop</Button>
        </Nav.Link>
        <Nav.Link href="#link2" className="text-center" style={{ fontFamily: 'Baskerville'}}>
          <Button variant="outline-tertiary">About</Button>
        </Nav.Link>
        <Navbar.Brand href="#home" className="text-center" >Skincare Products</Navbar.Brand>
        <Nav.Link href="#link3" className="text-center" style={{ fontFamily: 'Baskerville'}}>
          <Button variant="outline-tertiary">Cart</Button>
        </Nav.Link>
        <Nav.Link href="#link4" className="text-center" style={{ fontFamily: 'Baskerville'}}>
          <Button variant="outline-tertiary">Account</Button>
        </Nav.Link>
      </div>
    </Navbar>
  )
}

export default Header