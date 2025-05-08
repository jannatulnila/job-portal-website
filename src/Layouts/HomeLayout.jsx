import React from 'react';
import { Outlet, useLoaderData, useNavigation } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';


import HowItWorks from '../Components/howItWorks/HowItWorks';
import Loading from '../pages/Loading';



const HomeLayout = () => {
    const data = useLoaderData();
    const {state} =useNavigation()
    return (
         <div>
            <header className='w-11/12 mx-auto mt-2'>
                <Navbar></Navbar>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto my-3'>
                <aside> <HowItWorks data={data}></HowItWorks></aside>
               
                <section className='main'>
                   {state == "loading" ? <Loading/> : <Outlet></Outlet>} 
                </section>
    
            </main>

            <footer className='w-11/12 mx-auto'>
                <Footer></Footer>
            </footer>
        </div>
      
    );
};

export default HomeLayout;