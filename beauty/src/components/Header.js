import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#E4DDD5', height: '9em' }}>
      <div className="d-flex justify-content-between align-items-center w-50 mx-auto">
        <Nav.Link as={Link} to="/" className="text-center" style={{ fontFamily: 'Baskerville' }}>
          <Button variant="outline-tertiary" style={{ fontFamily: 'Baskerville', fontSize: '1em' }}>HOME</Button>
        </Nav.Link>
        <Nav.Link as={Link} to="/About" className="text-center" style={{ fontFamily: 'Baskerville' }}>
          <Button variant="outline-tertiary" style={{ fontFamily: 'Baskerville', fontSize: '1em' }}>ABOUT</Button>
        </Nav.Link>
        <Nav.Link as={Link} to="/Inventory" className="text-center" style={{ fontFamily: 'Baskerville' }}>
          <Button variant="outline-tertiary" style={{ fontFamily: 'Baskerville', fontSize: '1em' }}>SHOP</Button>
        </Nav.Link>
        <Navbar.Brand as={Link} to="/" className="text-center" style={{ fontFamily: 'Baskerville', fontSize: '40px' }}> A.A.B.B Skin   </Navbar.Brand>
        <Nav.Link as={Link} to="/Inventory" className="text-center" style={{ fontFamily: 'Baskerville' }}>
          <Button variant="outline-tertiary" style={{ fontFamily: 'Baskerville', fontSize: '1em' }}>SEARCH</Button>
        </Nav.Link>
        <Nav.Link as={Link} to="/Account"className="text-center" style={{ fontFamily: 'Baskerville' }}>
          <Button variant="outline-tertiary" style={{ fontFamily: 'Baskerville', fontSize: '1em' }}>ACCOUNT</Button>
        </Nav.Link>
        <Nav.Link as={Link} to="/Cart" className="text-center" style={{ fontFamily: 'Baskerville' }}>
          <Button variant="outline-tertiary" style={{ fontFamily: 'Baskerville', fontSize: '1em' }}>CART</Button>
        </Nav.Link>
      </div>
    </Navbar>
  )
}

export default Header