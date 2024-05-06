// import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Home from './pages/Home';
// import About from './pages/About';
// import Inventory from './pages/Inventory';
// import Account from './pages/Account';
// import Cart from './pages/Cart';
// import Search from './pages/Search';
// import AccountCreation from "./pages/Account Creation";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/About" element={<About />} />"
//           <Route path="/Search" element={<Search />} />
//           <Route path="/Inventory" element={<Inventory />} />
//           <Route path="/Account" element={<Account />} />
//           <Route path="/AccountCreation" element={<AccountCreation />} />
//           <Route path="/Cart" element={<Cart />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import About from './pages/About';
import Inventory from './pages/Inventory';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Search from './pages/Search';
import AccountCreation from "./pages/Account Creation";
import './App.css';

import { UserProvider } from './components/UserContext';

const App = () => {
  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path="*" element={ 
          <TransitionGroup>
            <CSSTransition classNames="fade" timeout={300}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Inventory" element={<Inventory />} />
                <Route path="/Account" element={<Account />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Search" element={<Search />} />
                <Route path="/AccountCreation" element={<AccountCreation />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        } />
      </Routes>
    </Router>
    </UserProvider>
  );
};

export default App;
