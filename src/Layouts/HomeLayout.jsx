import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

import LeftAside from '../Components/HomeLayouts/LeftAside';
import RightAside from '../Components/HomeLayouts/RightAside';


const HomeLayout = () => {
    
    return (
        <div>
            <header className='w-11/12 mx-auto mt-2'>
                <Navbar></Navbar>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto my-3'>
                <aside><LeftAside></LeftAside></aside>
               
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <aside><RightAside></RightAside></aside>
            </main>

            <footer className='w-11/12 mx-auto'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;