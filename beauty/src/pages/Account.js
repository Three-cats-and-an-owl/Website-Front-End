import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Row } from 'react-bootstrap'

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
        <Footer/>
    </div>  )
}

export default Account