import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import HeaderImage from '../../components/HeaderImage/HeaderImage';
import './Login.css';
import SignIn from '../../components/SignIn/SignIn';

const Login = () => {
  return (
    <div className='vh-100 d-flex flex-column login-container'>
    <HeaderImage />
    <NavBar      />
    <SignIn      />
    </div>
  );
};

export default Login;
