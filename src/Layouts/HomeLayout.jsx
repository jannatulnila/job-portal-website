import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';


const HomeLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto mt-2'>
                <Navbar></Navbar>
                <Header></Header>
            </header>
            <main>
                <section className='left-nav'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right-nav'></section>
            </main>
            <footer className='w-11/12 mx-auto'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;