import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginReg from './components/Auth/LoginReg';
import Home from './components/ShopNow/Home';
import { useState } from 'react';
import ProductDetails from './components/ShopNow/ProductDetails';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("isLoggedIn") === 'true');

  return (
    <div className="App">
      <Router>

        <Routes>
          <Route
            path="/"
            element={<LoginReg setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/home"
            element={isLoggedIn ? <Home setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />}
          />

          <Route
            path="/viewPrd/:prdId"
            element={isLoggedIn ? <ProductDetails setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />}
          />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
