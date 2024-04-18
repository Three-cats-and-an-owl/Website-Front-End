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
                There are <strong>0</strong> items in your cart. 
        </Popover>
    </div>
  )
}

export default Cart