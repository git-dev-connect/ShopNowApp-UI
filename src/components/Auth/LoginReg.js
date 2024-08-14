import React, { useState } from 'react';
import './LoginReg.css';
import { apiService } from '../globalUtils/ApiHandler';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, useNavigate } from 'react-router-dom';


function LoginReg({setIsLoggedIn }) {
    const [activeTab, setActiveTab] = useState('login');
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();


    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        console.log('Login Credentials:', loginData.username, loginData.password);

        try {
            const response = await apiService.login(loginData.username, loginData.password);
            if(response.status===200){
                setIsLoggedIn (true);
                navigate("/home");
                localStorage.setItem("isLoggedIn",'true');
            }
        } catch (error) {
            console.log("error in login");
            // document.getElementById("loginFailed").innerText="Invalid login details";

        }

    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        console.log('Signup Data:', signupData);
    };

    return (



        <div className='row'>
            <div className='col-12 offset-lg-7 col-lg-4'>
                <div className="shopping-container">
                    <div className="shopping-forms">
                        <div className={`tab-content ${activeTab === 'login' ? 'active' : ''}`}>
                            <div className="shopping-login-form">
                                <div className="shopping-title">Login</div>
                                <form onSubmit={handleLoginSubmit}>
                                    <div className="shopping-input-boxes">
                                        <div className="shopping-input-box">
                                            <i className="fas fa-envelope"></i>
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="Enter your email"
                                                value={loginData.email}
                                                onChange={handleLoginChange}
                                                required
                                            />
                                        </div>
                                        <div className="shopping-input-box">
                                            <i className="fas fa-lock"></i>
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Enter your password"
                                                value={loginData.password}
                                                onChange={handleLoginChange}
                                                required
                                            />
                                        </div>
                                        <div className="shopping-button input-box">
                                            <input type="submit" value="Login" />
                                        </div>
                                        <p id="loginFailed" style={{color :'#ff5e5e'}}></p>
                                        <div className="shopping-text sign-up-text">
                                            Don't have an account?
                                            <a href="#" onClick={() => handleTabChange('signup')}>Signup now</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className={`tab-content ${activeTab === 'signup' ? 'active' : ''}`}>
                            <div className="shopping-signup-form">
                                <div className="shopping-title">Signup</div>
                                <form onSubmit={handleSignupSubmit}>
                                    <div className="shopping-input-boxes">
                                        <div className="shopping-input-box">
                                            <i className="fas fa-user"></i>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your name"
                                                value={signupData.name}
                                                onChange={handleSignupChange}
                                                required
                                            />
                                        </div>
                                        <div className="shopping-input-box">
                                            <i className="fas fa-envelope"></i>
                                            <input
                                                type="text"
                                                name="email"
                                                placeholder="Enter your email"
                                                value={signupData.email}
                                                onChange={handleSignupChange}
                                                required
                                            />
                                        </div>
                                        <div className="shopping-input-box">
                                            <i className="fas fa-lock"></i>
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Enter your password"
                                                value={signupData.password}
                                                onChange={handleSignupChange}
                                                required
                                            />
                                        </div>
                                        <div className="shopping-button input-box">
                                            <input type="submit" value="Signup" />
                                        </div>
                                        <div className="shopping-text sign-up-text">
                                            Already have an account?
                                            <a href="#" onClick={() => handleTabChange('login')}>Login now</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LoginReg;
