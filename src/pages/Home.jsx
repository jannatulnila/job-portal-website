import React from 'react';
import Companies from '../Components/Companies/Companies';
import { useLoaderData } from 'react-router';

const Home = () => {
    const companies = useLoaderData();
    
    return (
        <div>
            <Companies companies={companies} ></Companies>
            
            
        </div>
    );
};

export default Home;