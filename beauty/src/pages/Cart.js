import Header from '../components/Header'
//import { Container, Row, Col } from 'react-bootstrap' 
import { Container, Popover } from 'react-bootstrap' 
import ProgressBar from 'react-bootstrap/ProgressBar';

import './Cart.css'

const Cart = () => {
  return (
    <div className="Cart">
        <Header/>
        <Popover
            id="cart-tab"
            trigger="click"
            placement="right"
            title="Cart">
              <Container>
                  <ProgressBar variant ="color" now={33} />
              </Container>
                There are <strong>0</strong> items in your cart. 
        </Popover>
    </div>
  )
}

export default Cart