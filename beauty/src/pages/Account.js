import Header from '../components/Header'
import { Container, Row, Col } from 'react-bootstrap'

import AccountLogin from './Account Login'
// import AccountCreation from "./Account Creation";

const Account = () => {
  return (
    <div className="Account">
        <Header/>
        <Container>
            <Row>
                {/*Account Page*/}
                <AccountLogin/>
                {/*<AccountCreation/>*/}
            </Row>
        </Container>
    </div>  )
}

export default Account