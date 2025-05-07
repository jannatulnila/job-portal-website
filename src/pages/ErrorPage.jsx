import React from 'react';
import errorLogo from "../assets/error-logo.png"
import Navbar from '../Components/Header/Navbar';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
        <div className='w-11/12 mx-auto flex flex-col items-center justify-center text-center mt-20'>
            <img src={errorLogo} alt="" />
            <h1 className='text-red-500 font-bold text-3xl mt-5'>404 - Page Not Found</h1>
            <Link to="/" className='btn btn-neutral text-white mt-5'>Go Home</Link>
        </div>
        </div>
    );
};

export default ErrorPage;