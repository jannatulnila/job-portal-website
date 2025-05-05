import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className=' min-h-screen'>
          
           <header className='w-11/12 mx-auto '>
               <Navbar></Navbar>
           </header>
           <main className='w-11/12 mx-auto py-4'>
             <Outlet></Outlet>
           </main>
          <footer className='w-11/12 mx-auto '>
              <Footer></Footer>
          </footer>
        </div>
    );
};

export default AuthLayout;