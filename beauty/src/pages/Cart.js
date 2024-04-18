import Header from '../components/Header'
//import { Container, Row, Col } from 'react-bootstrap' 
import { Popover } from 'react-bootstrap' 

const Cart = () => {
  return (
    <div className="Cart">
        <Header/>
        <Popover
            id="cart-tab"
            trigger="click"
            placement="right"
            title="Cart">
        </Popover>
    </div>
  )
}

export default Cart