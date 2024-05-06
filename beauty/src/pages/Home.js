// import Header from '../components/Header'
// import Footer from '../components/Footer'

// import Carousel from 'react-bootstrap/Carousel'
// import pic from '../assets/pictures/home_page_imageoverlay.jpg'
// import pic2 from '../assets/pictures/stock-homepageoverlay-dark.jpg'
// import pic3 from '../assets/pictures/coconut-dark.jpg'

// import './Home.css'

// const Home = () => {
//   return (
//     <div className="home">
//         <Header />
//         <Carousel>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100"
//                   src={pic}
//                   alt="First slide"
//                 />
//                 <Carousel.Caption>
//                   <div className="t1">Skincare at its finest</div>
//                   <div className="t2">For all skin types and situations, we got you covered.</div>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100"
//                   src={pic2}
//                   alt="Second slide"
//                 />
//                 <Carousel.Caption>
//                   <div className="t1">Natural, genuine, and real.</div>
//                   <div className="t2">Made with only the best materials and ingredients vetted by top researchers and mother nature.</div>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100 carousel"
//                   src={pic3}
//                   alt="Third slide"
//                 />
//                 <Carousel.Caption>
//                   <div className="t1">Save your skin and the planet</div>
//                   <div className="t2">Sustainable, carbon-negative production and manufacturing.</div>
//                 </Carousel.Caption>
//               </Carousel.Item>
//             </Carousel>
//             <Footer/>
//       </div>
//   )
// }

// export default Home

import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button } from 'react-bootstrap'
import pic from '../assets/pictures/home_page_imageoverlay.jpg'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const goToShop = () => {
    navigate('/Inventory')
  }

  return (
    <div className="home">
      <Header />
      <div className="landing">
        <img className="landing-image" src={pic} alt="First slide" style={{position: 'relative', top: 0, left: 0, height: '100vh', objectFit: 'cover'}}/>
        <div className="landing-caption">
          <div className="t1">Skincare at its finest</div>
          <div className="t2">For all skin types and situations, we got you covered.</div>
          <Button variant="secondary" className="shop-button" onClick={goToShop}>Shop</Button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home