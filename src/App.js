import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginReg from './components/Auth/LoginReg';
import Home from './components/Home/Home';
import { useState } from 'react';
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
            element={isLoggedIn ? <Home /> : <Navigate to="/" />}
          />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
