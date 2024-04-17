import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Inventory from './pages/Inventory';
import Account from './pages/Account';
import Cart from './pages/Cart';
import AccountCreation from "./pages/Account Creation";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />"
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/AccountCreation" element={<AccountCreation />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
