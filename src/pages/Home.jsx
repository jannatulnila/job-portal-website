import React from 'react';
import Companies from '../Components/Companies/Companies';
import { useLoaderData } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';



const Home = () => {
    const companies = useLoaderData();
    console.log(companies);
    return (
        <div>
            <Companies companies={companies} ></Companies>
        
            
        </div>
    );
};

export default Home;