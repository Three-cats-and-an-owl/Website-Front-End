import Header from '../components/Header'
import { Container, Row, Col } from 'react-bootstrap'

import AccountLogin from './Account Login'


const Account = () => {
  return (
    <div className="Account">
        <Header/>
        <Container>
            <Row>
                <AccountLogin/>
            </Row>
        </Container>
    </div>  )
}

export default Account